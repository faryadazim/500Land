import React from "react";
const Map = ({ src }: any) => {
  const styledCode = src?.replace(/(style|allowfullscreen)="[^"]*"/g, "");
  const modifiedCode = styledCode?.replace(
    "></iframe>",
    `style="border-radius: 1rem; width: 100%; height: 357px;" ></iframe>`
  );

  return (
    <>
      {/* <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d54450.514548599815!2d73.1420892!3d31.4648627!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39226faba4300133%3A0x5b6dc487e3b0c2b!2sSaffron%20Pharmaceuticals%20Pvt%20Ltd.!5e0!3m2!1sen!2s!4v1688974696305!5m2!1sen!2s"
        width="600"
        height="450"
        // style="border:0;"
        // allowfullscreen=""
        loading="lazy"
        className="rounded-2xl w-full h-[357px]"
        // referrerpolicy="no-referrer-when-downgrade"
      ></iframe> */}

      {src && <div dangerouslySetInnerHTML={{ __html: styledCode }}></div>}
    </>
  );
};

export default Map;
