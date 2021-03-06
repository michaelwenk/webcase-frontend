/** @jsxImportSource @emotion/react */

import Card from 'react-bootstrap/Card';
import OCLnmr from 'react-ocl-nmr';
import OCL from 'openchemlib/full';

function ResultCard({ id, molecule, styles }) {
  return (
    <Card style={styles}>
      <Card.Header>{`#${id}`}</Card.Header>
      <Card.Body>
        <OCLnmr
          OCL={OCL}
          id={`molSVG${id}`}
          width={150}
          height={150}
          molfile={molecule.molfile}
          setSelectedAtom={() => {}}
          atomHighlightColor={'red'}
          atomHighlightOpacity={0.35}
          highlights={[]}
          setHoverAtom={() => {}}
          setMolfile={() => {}}
        />
        {/* <Card.Title>{`#${i + j + 1}`}</Card.Title> */}
        <Card.Text>
          {/* {molecule.meta.smiles} <br />  */}
          {molecule.meta.mf} <br /> {molecule.meta.mw.toFixed(5)} <br />{' '}
          {molecule.meta.avgDev ? Number(molecule.meta.avgDev).toFixed(3) : ''}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default ResultCard;
