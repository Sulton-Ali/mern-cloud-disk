
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentDir, setPopupDisplay } from '../../reducers/fileReducer';
import { createDir, getFiles } from './../../actions/file';
import './disk.scss';
import FileList from './fileList/FileList';
import Popup from './Popup';

const Disk = () => {
  const dispatch = useDispatch();
  const currentDir = useSelector(state => state.files.currentDir);
  const dirStack = useSelector(state => state.files.dirStack);

  useEffect(() => {
    dispatch(getFiles(currentDir));
  }, [currentDir]);

  function showPopupHandler() {
    // dispatch(createDir(currentDir, 'sadsadsa'));
    dispatch(setPopupDisplay('flex'));
  }

  function backClickHandler() {
    const backDirId = dirStack.pop();
    dispatch(setCurrentDir(backDirId));
  }

  return (
    <div className="disk">
      <div className="disk__btns">
        <button className="disk__back" onClick={() => backClickHandler()}>Назад</button>
        <button className="disk__create" onClick={() => showPopupHandler()}>Создать папку</button>
      </div>

      <FileList />
      <Popup />
    </div>
  )
}

export default Disk;
