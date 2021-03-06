import DataDialog from './DataDialog';
import { connect } from 'react-redux';

import {
  saveDataAction,
  dataDialogHideAction,
  showLoader
} from './../redux/actions';

const mapStateToProps = (state) => ({
  exercises: state.exercises,
  isOpen: state.isDataDialogShown,
  users: state.users
});

const mapDispatchToProps = (dispatch) => ({
  handleDataDialogHide: () => {
    dispatch(dataDialogHideAction());
  },
  handleDataSave: (data) => {
    dispatch(showLoader());
    dispatch(saveDataAction(data));
  }
});

const DialogDataContainer = connect(mapStateToProps, mapDispatchToProps)(DataDialog);

export default DialogDataContainer;
