import React, { useEffect, useRef } from 'react';

function Latex(props) {
  const node = useRef(null);

  useEffect(() => {

    const mathJaxConfig = {
        tex2jax: {
            inlineMath: [['$', '$'], ['\\(', '\\)']],
            processEscapes: true,
        },
      };

    if (window.MathJax) {
        window.MathJax.Hub.Config(mathJaxConfig);
        window.MathJax.Hub.Queue([
            "Typeset", 
            window.MathJax.Hub,
            node.current
        ]);
    } else {
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.5/MathJax.js?config=TeX-AMS_CHTML';
        script.async = true;
        script.onload = () => {
            window.MathJax.Hub.Config(mathJaxConfig);
            window.MathJax.Hub.Queue([
                "Typeset", 
                window.MathJax.Hub,
                node.current
            ]);
        };
        document.head.appendChild(script);
    }
  }, [props.children]);

  return (
    <div ref={node}>
      {props.children}
    </div>
  );
}

export default Latex;
