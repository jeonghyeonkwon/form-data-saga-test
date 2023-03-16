import React, { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import PreviewComponent from "../components/PreviewComponent";
import UploadComponent from "../components/UploadComponent";
import { changeField, changeFiles, fetchBoard } from "../modules/upload";
const UploadPageForm = styled.div`
  width: 100%;
  height: 100vh;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const RegisterForm = styled.div`
  width: 80%;
`;
const InfoForm = styled.div`
  width: 100%;
  & h3 {
    font-size: 24px;
  }
  & input[type="text"],
  & textarea {
    margin-left: 20px;
    width: 50%;
    margin-bottom: 15px;
    border-radius: 10px;
    transition: 0.4s;
    border: 1px solid black;
    font-size: 20px;
    &:hover,
    &:focus {
      border: 1px solid;
      border-color: dodgerblue;
    }
  }
  & input[type="text"] {
    padding-left: 10px;
    height: 35px;
  }
  & textarea {
    padding: 10px;
    height: 200px;
  }
`;
const FileForm = styled.div`
  width: 100%;
  display: flex;
  padding: 10px;
  justify-content: space-between;
`;

const UploadForm = styled.div`
  height: 400px;
  width: 60%;
  border-radius: 10px;

  border: 2px solid black;
  background-color: #f1f1f1;
  position: relative;
`;

const NoFileTitle = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  font-size: 40px;
  font-weight: bold;
  transform: translate(-50%, -50%);
`;
const PreviewForm = styled.div`
  width: 35%;
  height: 400px;
  border: 1px solid black;
  border-radius: 10px;
  padding: 20px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(3, 1fr);
  row-gap: 1px;
`;
const BtnForm = styled.div`
  width: 80%;
  padding: 20px;

  input[type="button"] {
    border-radius: 10px;
    padding: 10px 20px;
    border: none;
    color: white;
    background-color: #0a5803;
    transition: 0.4s;
    &:hover {
      background-color: green;
    }
  }
`;
function UploadPage(props) {
  const dispatch = useDispatch();
  const { title, files } = useSelector(({ upload }) => ({
    title: upload.boardForm.title,
    files: upload.boardForm.files,
  }));
  const [preview, setPreview] = useState([
    { uid: 1, title: "미리보기1" },
    { uid: 2, title: "미리보기2" },
    { uid: 3, title: "미리보기3" },
    { uid: 4, title: "미리보기4" },
    { uid: 5, title: "미리보기5" },
    { uid: 6, title: "미리보기6" },
    { uid: 7, title: "미리보기7" },
    { uid: 8, title: "미리보기8" },
    { uid: 9, title: "미리보기9" },
    { uid: 10, title: "미리보기10" },
  ]);
  // const onDrop = (file) => {
  //   console.log(file);
  //   file.forEach((img) => {
  //     console.log(img);
  //     dispatch(
  //       changeField({
  //         key: "files",
  //         value: img,
  //       })
  //     );
  //   });
  // };

  // useEffect(() => {
  //   console.log("effect");
  //   console.log(files);
  // }, [files]);
  const onChangeField = (e) => {
    const { name, value } = e.target;
    dispatch(
      changeField({
        key: name,
        value,
      })
    );
  };
  const onClickDelete = (uid) => {
    console.log(uid);
    setPreview(preview.filter((data) => data.uid !== uid));
  };
  // const onClickUpload = () => {
  //   const frm = new FormData();
  //   frm.append("title", title);
  //   files.forEach((img, index) => {
  //     frm.append(`file[${index}]`, img);
  //   });
  //   dispatch(fetchBoard({ form: frm }));
  // };
  // const onClickDelete = (e) => {
  //   const { name } = e.target;
  //   console.log(name);
  //   console.log(files);
  //   const changeFileArray = files.filter(
  //     (img) => img.lastModified !== Number(name)
  //   );

  //   dispatch(changeFiles({ files: changeFileArray }));
  // };
  // const { getRootProps, getInputProps, isDragActive } = useDropzone({
  //   onDrop,
  // });

  return (
    <UploadPageForm>
      <RegisterForm>
        <InfoForm>
          <h3>타이틀</h3>
          <input type="text" name="title" onChange={onChangeField} />
        </InfoForm>
        <InfoForm>
          <h3>내용</h3>
          <textarea name="content" onChange={onChangeField}></textarea>
        </InfoForm>
        <FileForm>
          <UploadForm>
            <NoFileTitle>파일 끌어다 올리기</NoFileTitle>
          </UploadForm>
          <PreviewForm>
            {preview.map((data, index) => (
              <PreviewComponent
                key={data.uid}
                data={data}
                onClickDelete={onClickDelete}
              />
            ))}
          </PreviewForm>
        </FileForm>
      </RegisterForm>
      <BtnForm>
        <input type="button" value="등록하기" />
      </BtnForm>
    </UploadPageForm>
  );
}

export default UploadPage;
