import React, { useState } from "react";
import Input from "./../../utils/input/Input";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setPopupDisplay } from "../../reducers/fileReducer";
import { createDir } from "../../actions/file";

const Popup = () => {
  const [dirName, setDirName] = useState("");
  const popupDisplay = useSelector((state) => state.files.popupDisplay);
  const currentDir = useSelector((state) => state.files.currentDir);
  const dispatch = useDispatch();

  function clickHandler() {
    dispatch(createDir(currentDir, dirName));
    if (dirName) {
      setDirName('');
      dispatch(setPopupDisplay("none"));
    }
  }

  return (
    <div
      className="popup"
      onClick={() => dispatch(setPopupDisplay("none"))}
      style={{ display: popupDisplay }}
    >
      <div className="popup__content" onClick={(event) => event.stopPropagation()}>
        <div className="popup__header">
          <div className="popup__title">Создать новую папку</div>
          <button
            className="popup__close"
            onClick={() => dispatch(setPopupDisplay("none"))}
          >
            X
          </button>
        </div>
        <Input
          type="text"
          placeholder="Введите название папки..."
          value={dirName}
          setValue={setDirName}
        />
        <button className="popup__create" onClick={() => clickHandler()}>Создать</button>
      </div>
    </div>
  );
};

export default Popup;
