import * as B from 'src/components'
import { Link, Route } from 'react-router-dom'
import Step1 from './step1'
import Step2 from './step2'
import Step3 from './step3'

const NewPool = () => {
  const step = 1;
  return <B.BaseTemplate>
      <h1>New pool</h1>
      {step == 1 ?
      <Step1/>
      :
      <Step2/>
      }
  </B.BaseTemplate>
}

export default NewPool
