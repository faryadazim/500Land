const opportunity = {
  name: "opportunity",
  title: "Opportunity",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "location",
      title: "Location",
      type: "string",
    },
    {
      name: "locationMap",
      title: "Map Location",
      type: "string",
    },
    {
      name: "area",
      title: "Area",
      type: "string",
    },
    {
      name: "currency",
      title: "Currency code",
      type: "string",
    },
    {
      name: "requestedFund",
      title: "Requested Fund",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "name" },
    },
    {
      name: "image",
      title: "Image",
      type: "array",
      of: [
        {
          type: "image",
          options: { hotspot: true },
          fields: [
            {
              name: "alt",
              title: "Alt",
              type: "string",
            },
          ],
        },
      ],
    },
    // {
    //     name: "url",
    //     title: "URL",
    //     type: "url",
    // },
    {
      name: "description",
      title: "Description",
      type: "array",
      of: [
        { type: "block" },
        // {type: 'actor'},
      ],
    },
  ],
};

export default opportunity;
