import * as B from 'src/components'
import { Link, Route } from 'react-router-dom'
import { Form, Input, Button, Checkbox } from 'antd';

const Step1 = () => {

  return <div>
      <h1>Name your pool</h1>
      <p>pool 이름은 참여하는 모든 사람들에게 공개됩니다.</p>
      <Input />
      <Button>Next</Button>
  </div>
}

export default Step1
