/** @jsxImportSource @emotion/react */

import { Molecule } from 'openchemlib/full';
import { useMemo, useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './ResultsPanel.css';
import ResultsContainer from '../elements/ResultsContainer';

function ResultsPanel({ results }) {
  const [nCols, setNCols] = useState(4);

  const molecules = useMemo(() => {
    return results && results.dataSetList
      ? results.dataSetList.map((dataSet, i) => {
          const molecule = Molecule.fromSmiles(dataSet.meta.smiles);
          const { formula, relativeWeight } = molecule.getMolecularFormula();
          return {
            molfile: molecule.toMolfileV3(),
            meta: { ...dataSet.meta, mf: formula, mw: relativeWeight },
          };
        })
      : [];
  }, [results]);

  return (
    <div className="results-panel">
      <p>ResultsPanel!!!</p>
      <div className="results-container">
        <ResultsContainer molecules={molecules} nCols={nCols} />
      </div>
    </div>
  );
}

export default ResultsPanel;
