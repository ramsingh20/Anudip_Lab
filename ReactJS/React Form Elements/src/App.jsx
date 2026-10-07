import './App.css'
import ControlCheckBox from './ControlCheckBox'
import DOB from './DOB'
import DropDown from './DropDown'
import EmailInput from './EmailInput'
import FileUpload from './FileUpload'
import PasswordInput from './PasswordInput'
import RadioBtn from './RadioBtn'
import RangeSlider from './RangeSlider'
import TextArea from './TextArea'
import TextInput from './TextInput'

function App() {

  return (
    <div>
      <TextInput />
      <PasswordInput />
      <EmailInput />
      <TextArea />
      <RadioBtn />
      <DropDown />
      <FileUpload />
      <DOB />
      <RangeSlider />
      <ControlCheckBox />

      <button>Submit</button>
    </div>
  )
}

export default App
