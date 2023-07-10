import React from "react";
const Map = ({ src }: any) => {
  const styledCode = src.replace(/(style|allowfullscreen)="[^"]*"/g, "");
  const modifiedCode = styledCode?.replace(
    "></iframe>",
    `style="border-radius: 1rem; width: 100%; height: 357px;" ></iframe>`
  );

  return (
    <>{src && <div dangerouslySetInnerHTML={{ __html: modifiedCode }}></div>}</>
  );
};

export default Map;
