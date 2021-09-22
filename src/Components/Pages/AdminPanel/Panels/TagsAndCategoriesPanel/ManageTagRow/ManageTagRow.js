import React, { useState } from "react";
import ConfirmModal from "../../../../../UI/Modal/ConfirmModal/ConfirmModal";

import classes from "./ManageTagRow.module.css";
import ToggleSwitch from "./ToggleSwitch/ToggleSwitch";

const ManageTagRow = (props) => {
    const [editCancelModalOpen, setEditCancelModalOpen] = useState(false)
    const [editProceedModalOpen, setEditProceedModalOpen] = useState(false)
    const [deleteProceedModalOpen, setDeleteProceedModalOpen] = useState(false)
    const [editOn, setEditOn] = useState(false)
    const [editTagForm, setEditTagForm] = useState({
      title: props.tag.title,
      is_main: props.tag.is_main,
      is_primary: props.tag.is_primary,
      display_order: props.tag.display_order,
    });

    const onEditModeOpen = () => {
      setEditOn(true)
    }

    const onEditModeClose = () => {
      setEditOn(false)
    }

    const onEditCancelModalOpen = () => {
      setEditCancelModalOpen(true)
    }

    const onEditCancelModalClose = () => {
      setEditCancelModalOpen(false)
    }

    const onEditCancelModalProceed = () => {
      console.log(props.tag)
      setEditTagForm({
        title: props.tag.title,
        is_main: props.tag.is_main,
        is_primary: props.tag.is_primary,
        display_order: props.tag.display_order,
      });
      setEditCancelModalOpen(false);
      setEditOn(false)
    }

    const onEditProceedModalOpen = () => {
      setEditProceedModalOpen(true)
    }

    const onEditProceedModalClose = () => {
      setEditProceedModalOpen(false)
    }

    const onEditProceedModalProceed = () => {
      Promise.resolve(props.onEdit(editTagForm)).then(res => {
        setEditProceedModalOpen(false);
        setEditOn(false)
      }).catch(err => {
        console.log(err)
        setEditProceedModalOpen(false);
      })
    }

    const onDeleteProceedModalOpen = () => {
      setDeleteProceedModalOpen(true)
    }

    const onDeleteProceedModalClose = () => {
      setDeleteProceedModalOpen(false)
    }

    const onDeleteProceedModalProceed = () => {
      Promise.resolve(props.onRemove()).then(res => {
        setDeleteProceedModalOpen(false);
      }).catch(err => {
        console.log(err)
        setDeleteProceedModalOpen(false);
      })
    }
    
  const onEditTagFormTitleChangeHandler = (event) => {
    event.persist();
    setEditTagForm((prevForm) => {
      return {
        ...prevForm,
        title: event.target.value,
      };
    });
  };

  const onEditTagFormPriorityChangeHandler = (event) => {
    event.persist();
    if (parseInt(event.target.value, 10) >= 0) {
        setEditTagForm((prevForm) => {
        return {
          ...prevForm,
          display_order: event.target.value,
        };
      });
    }
  };

  const onEditTagFormMainChangeHandler = (newState) => {
    setEditTagForm((prevForm) => {
      return {
        ...prevForm,
        is_main: newState,
      };
    });
  };

  const onEditTagFormPrimaryChangeHandler = (newState) => {
    setEditTagForm((prevForm) => {
      return {
        ...prevForm,
        is_primary: newState,
      };
    });
  };

  const editMode = (
    <div className={classes.ManageTagRow}>
      <ConfirmModal show={editCancelModalOpen} proceed={onEditCancelModalProceed} modalClosed={onEditCancelModalClose} message={<p>آیا مطمئن هستید؟ تغیرات شما پاک خواهند شد.</p>}/>
      <ConfirmModal show={editProceedModalOpen} proceed={onEditProceedModalProceed} modalClosed={onEditProceedModalClose} message={<p>آیا میخواهید تغیرات اعمال شوند؟</p>}/>
      <p>{props.tag.id}</p>
      <input type="text" placeholder="عنوان" value={editTagForm.title} onChange={onEditTagFormTitleChangeHandler} className={classes.TagRowInputText}/>
      <ToggleSwitch defaultChecked={editTagForm.is_main} onChange={onEditTagFormMainChangeHandler}/>
      <ToggleSwitch defaultChecked={editTagForm.is_primary} onChange={onEditTagFormPrimaryChangeHandler}/>
      <input type="number" value={editTagForm.display_order} onChange={onEditTagFormPriorityChangeHandler} className={classes.TagRowInputNumber}/>
      <div>
        <button className={classes.Success} onClick={onEditProceedModalOpen}>ثبت</button>
        <button className={classes.Failure} onClick={onEditCancelModalOpen}>بی‌خیال</button>
      </div>
    </div>
  );

  const showMode = (
    <div className={classes.ManageTagRow}>
      <ConfirmModal show={deleteProceedModalOpen} proceed={onDeleteProceedModalProceed} modalClosed={onDeleteProceedModalClose} message={<p>آیا میخواهید این تگ پاک شود ؟</p>}/>
      <p>{props.tag.id}</p>
      <p>{props.tag.title}</p>
      <p>{props.tag.is_main ? 'true' : 'false'}</p>
      <p>{props.tag.is_primary ? 'true' : 'false'}</p>
      <p>{props.tag.display_order}</p>
      <div>
        <button className={classes.Success} onClick={onEditModeOpen}>تغییر</button>
        <button className={classes.Failure} onClick={onDeleteProceedModalOpen}>حذف</button>
      </div>
    </div>
  );

  let onScreen = showMode;

  if (editOn){
      onScreen = editMode
  }

  return (
    onScreen
  );
};

export default ManageTagRow;
