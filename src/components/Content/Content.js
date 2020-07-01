import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown/with-html';
import ContentStyled from './Content.styled';

const transition = {
  duration: 0.5,
  ease: [0.43, 0.13, 0.23, 0.96],
};
const backVariants = {
  exit: { y: 50, opacity: 0, transition },
  enter: { y: 0, opacity: 1, transition },
};

function SardiusLive({ markdownFile = null, children }) {
  const [content, setContent] = useState('');
  useEffect(() => {
    if (markdownFile !== null) {
      fetch(markdownFile)
        .then(response => response.text())
        .then(text => {
          // Logs a string of Markdown content.
          // Now you could use e.g. <rexxars/react-markdown> to render it.
          setContent(text);
        });
    }
  }, [setContent, markdownFile]);

  return (
    <ContentStyled
      initial={{ y: 50, opacity: 0 }}
      animate="enter"
      exit="exit"
      variants={backVariants}
    >
      <ReactMarkdown source={content} escapeHtml={false} />
      {children}
    </ContentStyled>
  );
}

export default SardiusLive;
