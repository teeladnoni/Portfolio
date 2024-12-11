// Form.js
import Input from "./Input";
import Textarea from "./Textarea";

const Form = () => {
  return (
    <div className="flex flex-col w-full md:w-2/3 space-y-4">
      <h2 className="text-2xl md:3xl font-bold span">Let's work together</h2>
      <p className="text-white/70">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa aliquam
        consequuntur alias, amet voluptate error hic delectus. Temporibus
        obcaecati facilis.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Input label="Your Name" placeholder="Your name" />
        <Input label="Address" placeholder="Address" />
        
      </div>
      <Textarea />
      <button className="px-6 py-2 mt-4 bg-gradient-to-r from-[#dd32f3] to-[#ce90cb] hover:scale-105 text-white font-semibold rounded-md hover:bg-teal-500">
        Submit
      </button>
    </div>
  );
};

export default Form;
