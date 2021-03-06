import { Switch } from "@headlessui/react";

const PowerSwitch = ({ enabled, setEnabled }) => {
  return (
    <Switch.Group>
      <div className="flex items-center mt-4">
        <Switch.Label className="mr-4 text-white font-bold">{enabled ? "Bank 2" : "Bank 1"}</Switch.Label>
        <Switch
          checked={enabled}
          onChange={setEnabled}
          className={`${
            enabled ? "bg-blue-600" : "bg-green-500"
          } relative inline-flex items-center h-6 rounded-full w-11 transition-all`}
        >
          <span className="sr-only">Bank Switch</span>
          <span
            className={`${
              enabled ? "translate-x-6" : "translate-x-1"
            } inline-block w-4 h-4 transform bg-white rounded-full transition-all`}
          />
        </Switch>
      </div>
    </Switch.Group>
  );
};

export default PowerSwitch;