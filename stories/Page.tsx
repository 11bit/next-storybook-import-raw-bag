import React from 'react'

/**
* If import has something with the word `raw` in it (here it is Drawer) then every import is null
*/
import { Button, Drawer } from 'antd'

export default function Page() {
  console.log(Drawer) // use Drawer so it is not treeshaken
  return (
    <>
      <Button>test</Button>
    </>
  );
}
