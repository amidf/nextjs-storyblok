import React, { useState, useEffect } from "react"

import FileIcon from "./FileIcon.svg"
import * as S from "./styled"

const CodeTutorial = ({ files, highlights }) => {
  const [file, setFile] = useState(files[0])

  const getHighlights = () =>
    file.name === highlights.file ? highlights.lines : null

  useEffect(() => {
    const file = files.find(({ name }) => name === highlights.file) || files[0]
    setFile(file)
  }, [highlights, files])

  return (
    <S.Container>
      <S.FilesWrap>
        <S.Files>
          {files.map(item => (
            <S.File
              key={item.name}
              isActive={item.name === file.name}
              onClick={() => setFile(item)}
            >
              <FileIcon />
              {item.name}
            </S.File>
          ))}
        </S.Files>
      </S.FilesWrap>
      <S.Code
        source={file.source}
        inline={file.content}
        highlights={getHighlights()}
      />
    </S.Container>
  )
}

CodeTutorial.defaultProps = {
  highlights: {},
  files: []
}

export default CodeTutorial
