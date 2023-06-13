import React from 'react';

class CustomAvatar extends React.Component {
  render() {
    const { src, alt, style, ...rest } = this.props;
    return (
      <svg viewBox="0 0 500 500" style={{ opacity: 1, ...style }} {...rest}>
        <image
          x="0"
          y="0"
          width="100%"
          height="100%"
          style={{ clipPath: "url(#my-clip-path)", objectFit: "cover" }}
          xlinkHref={src}
        />
        <clipPath id="my-clip-path">
          <path
            id="my-path"
            d="M141,164 L177,188 L165,224 L129,196 L141,164 M273,188 L309,164 L321,196 L285,224 L273,188 M208,116 C267,116 313,162 313,221 C313,281 267,327 208,327 C148,327 102,281 102,221 C102,162 148,116 208,116 Z"
          />
        </clipPath>
      </svg>
    );
  }
}

export default CustomAvatar;
