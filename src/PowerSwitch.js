import { Switch } from "@headlessui/react";

const BankSwitch = ({ power, setPower }) => {
  return (
    <Switch.Group>
      <div className="flex items-center">
        <Switch.Label className="mr-4 text-white font-bold">{power ? "Power On" : "Power Off"}</Switch.Label>
        <Switch
          checked={power}
          onChange={setPower}
          className={`${
            power ? "bg-green-600" : "bg-gray-500"
          } relative inline-flex items-center h-6 rounded-full w-11 transition-all`}
        >
          <span className="sr-only">Bank Switch</span>
          <span
            className={`${
              power ? "translate-x-6" : "translate-x-1"
            } inline-block w-4 h-4 transform bg-white rounded-full transition-all`}
          />
        </Switch>
      </div>
    </Switch.Group>
  );
};

export default BankSwitch;