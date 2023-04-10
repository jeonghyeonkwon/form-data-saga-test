import React, { useEffect, useRef, useState } from "react";
import { useDropzone } from "react-dropzone";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import PreviewComponent from "../components/PreviewComponent";
import UploadComponent from "../components/UploadComponent";
import { changeField, changeFiles, fetchBoard } from "../modules/upload";
import { imageToBase64 } from "../util/ImgUtil";
const UploadPageForm = styled.div`
  width: 100%;
  height: 100vh;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h3 {
    font-size: 24px;
  }
`;
const RegisterForm = styled.div`
  width: 80%;
`;
const InfoForm = styled.div`
  width: 100%;

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
  input {
    display: none;
  }
`;

const FilePlusBtn = styled.span`
  background-color: dodgerblue;
  display: inline-block;
  text-align: center;
  line-height: 28px;
  border-radius: 50%;
  margin-left: 10px;
  color: white;
  width: 25px;
  height: 25px;
  transition: 0.4s;
  cursor: pointer;
  &:hover {
    background-color: #0d4e90;
  }
`;
const NoUploadForm = styled.div`
  height: 400px;
  width: 60%;
  border-radius: 10px;

  border: 2px solid black;
  background-color: #f1f1f1;
  position: relative;
`;
const UploadForm = styled.div`
  height: 400px;
  width: 60%;
  border-radius: 10px;

  border: 2px solid black;
  background-color: #f1f1f1;

  overflow: hidden;
  padding: 6px;
`;
const UploadContent = styled.div`
  overflow-y: auto;
  padding: 20px;
  width: 100%;
  height: 400px;
  display: grid;
  grid-template-columns: auto(1, 1fr);
  place-items: center;
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
  padding: 6px;
  overflow: hidden;
`;
const PreviewContent = styled.div`
  /* background-color: dodgerblue; */
  padding: 20px;
  height: 400px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(4, 1fr);

  row-gap: 40px;
  border-radius: 8px;
  overflow-y: scroll;
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

type FileData = {
  title: string;
  url: string;
};

function UploadPage() {
  const fileRef = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();

  const [preview, setPreview] = useState<FileData[]>([]);
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
  const onClickDelete = (title: string) => {
    setPreview(preview.filter((data) => data.title !== title));
  };
  const onClickFile = (e: React.MouseEvent<HTMLButtonElement>) => {
    fileRef?.current?.click();
  };
  const onChangeFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const imgFiles = Array.from(e.target.files);

    imgFiles.forEach((file) => {
      imageToBase64(file).then((result) => {
        const data = {
          title: file.name,
          url: result,
        };
        setPreview((oldData) => [data, ...oldData]);
      });
    });
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
        <h3>
          파일 올리기<FilePlusBtn onClick={onClickFile}>+</FilePlusBtn>
        </h3>
        <FileForm>
          <input
            type="file"
            multiple
            ref={fileRef}
            accept="image/*"
            onChange={onChangeFile}
          />
          {preview.length === 0 ? (
            <NoUploadForm>
              {" "}
              <NoFileTitle>파일 끌어다 올리기</NoFileTitle>
            </NoUploadForm>
          ) : (
            <UploadForm>
              <UploadContent>
                {preview.map((data, index) => (
                  <UploadComponent data={data} onClickDelete={onClickDelete} />
                ))}
              </UploadContent>
            </UploadForm>
          )}
          <PreviewForm>
            <PreviewContent>
              {preview.map((data, index) => (
                <PreviewComponent data={data} onClickDelete={onClickDelete} />
              ))}
            </PreviewContent>
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
