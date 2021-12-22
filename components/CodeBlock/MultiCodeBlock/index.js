import React, { useState, useEffect } from "react";

import FileIcon from "./FileIcon.svg";
import * as S from "./styled";

const CodeTutorial = ({ files, highlights }) => {
  const [file, setFile] = useState(files[0]);

  const getHighlights = () =>
    file.filename === highlights.file ? highlights.lines : null;

  useEffect(() => {
    const file =
      files.find(({ filename }) => filename === highlights.file) || files[0];
    setFile(file);
  }, [highlights, files]);

  return (
    <S.Container>
      <S.FilesWrap>
        <S.Files>
          {files.map((item) => (
            <S.File
              key={item.filename}
              isActive={item.filename === file.filename}
              onClick={() => setFile(item)}
            >
              <FileIcon />
              {item.filename}
            </S.File>
          ))}
        </S.Files>
      </S.FilesWrap>
      <S.Code
        source={file.body}
        inline={file.body}
        highlights={getHighlights()}
      />
    </S.Container>
  );
};

CodeTutorial.defaultProps = {
  highlights: {},
  files: [],
};

export default CodeTutorial;
