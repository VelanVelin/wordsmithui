import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import LinearProgress from 'material-ui/LinearProgress';
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

const SentenceList = ({ sentences, apiCallLoading }) => (
  <div>
    <Table  
    multiSelectable={false} 
    selectable={true}
    style={{tableLayout: 'auto'}}
    className="TableComponent"
    >
      <TableHeader 
      displayRowCheckbox={false} 
      displaySelectAll={false} 
      enableSelectAll={false}
      showcheckboxes={false}
      adjustForCheckbox={false}>
        <TableRow>
          <TableHeaderColumn style={{padding: "5px", textAlign: "left", fontSize: "17px"}}>Entered text</TableHeaderColumn>
          <TableHeaderColumn style={{padding: "5px", textAlign: "left", fontSize: "17px"}}>Reversed text</TableHeaderColumn>
        </TableRow>
      </TableHeader>
      <TableBody displayRowCheckbox={false} deselectOnClickaway={false}>
      {sentences.map(se => (
        <TableRow key={se.id}>
          <TableRowColumn style={{padding: "5px", whiteSpace: "wrap", textAlign: "left"}}>{se.text}</TableRowColumn>
          <TableRowColumn style={{padding: "5px", whiteSpace: "wrap", textAlign: "left"}}>{se.reversed}</TableRowColumn>
        </TableRow>
      ))}
      </TableBody>
    </Table>
    {apiCallLoading ? <LinearProgress mode="indeterminate" /> : <span /> }
  </div>
)
SentenceList.propTypes = {
  sentences: PropTypes.array.isRequired
};

export default connect(mapStateToProps)(SentenceList)
