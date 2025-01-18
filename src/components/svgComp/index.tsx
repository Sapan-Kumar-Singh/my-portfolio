import { useEffect, useState } from "react";

interface SvgImageProps {
  fileName: string;
  svgHeight?: string;
  svgWidth?: string;
  fillColor?: string;
  hoverFillColor?:string
}

const SvgImage = ({
  fileName,
  svgHeight = '100px',
  svgWidth = '100px',
  fillColor = 'none',
}: SvgImageProps) => {
  const [svgContent, setSvgContent] = useState<string | null>(null);
  useEffect(() => {
    fetch(`/icons/${fileName}.svg`)
      .then((response) => response.text())
      .then((svg) => setSvgContent(svg))
      .catch((error) => console.error("Error loading SVG:", error));
  }, [fileName]);

  return (
    <>

      {svgContent ? (
        <div
          dangerouslySetInnerHTML={{ __html: svgContent }}
          style={{ width: svgWidth, height: svgHeight, fill: fillColor }}
        />
      ) : (
        <></>
      )}
    </>
  );
};

export default SvgImage;
