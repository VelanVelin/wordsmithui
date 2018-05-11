import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
// import Sentence from './Sentence'
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

const mapStateToProps = state => {
  return { 
    sentences: state.sentences,
    apiCallLoading: state.apiCallLoading 
  };
};

const SentenceList = ({ sentences }) => (
  <Table  
  multiSelectable={false} 
  selectable={true}
  style={{tableLayout: 'auto'}}
  className="TableComponent"
  // onCellClick={(row, col) => {
  //   if(col === -1) {
  //     props.onSentenceSelected(props.sentence[ row ])
  //   }
  // }}
  >
    <TableHeader 
    displayRowCheckbox={false} 
    displaySelectAll={false} 
    enableSelectAll={false}
    showcheckboxes={false}
    adjustForCheckbox={false}>
      <TableRow>
        <TableHeaderColumn style={{padding: '5px', textAlign: 'left'}}>Entered text</TableHeaderColumn>
        <TableHeaderColumn style={{padding: '5px', textAlign: 'left'}}>Reversed text</TableHeaderColumn>
      </TableRow>
    </TableHeader>
    <TableBody displayRowCheckbox={false} deselectOnClickaway={false}>
    {sentences.map(se => (
      <TableRow key={se.id}>
        <TableRowColumn style={{padding: '5px', whiteSpace: 'wrap', textAlign: 'left'}}>{se.text}</TableRowColumn>
        <TableRowColumn style={{padding: '5px', whiteSpace: 'wrap', textAlign: 'left'}}>{se.reversed}</TableRowColumn>
      </TableRow>
    ))}
    </TableBody>
  </Table>
)
SentenceList.propTypes = {
  sentences: PropTypes.array.isRequired
};

export default connect(mapStateToProps)(SentenceList)
