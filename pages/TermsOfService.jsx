import React from "react";
import { useRouter } from "next/router";

const TermsOfService = () => {
  const router = useRouter();

  const handleCloseButtonClick = () => {
    router.back();
  };
  return (
    <div className=" top-0 left-0 right-0 bottom-0 bg-white p-6 ">
      <h1 className="text-3xl text-center text-primary font-bold mb-6">
        Terms and Conditions
      </h1>
      <div>
        <h3 className="text-secondary text-2xl  mb-4 font-semibold">
          Terms and Conditions
        </h3>
        <p className="text-sm mb-6 top-2">
          Iaculis euismod a euismod dictum sit dictum arcu, neque. Consequat
          fusce laoreet accumsan, vestibulum. Turpis sed eu tortor massa
          pellentesque lectus tortor viverra sed. Nulla dignissim quis dolor
          nunc id bibendum vel. Dignissim sit sed viverra rhoncus pulvinar
          blandit massa. Eu aenean eu est non nibh suscipit pretium,
          pellentesque. Dolor vitae, amet, ornare suspendisse. Sit ac varius
          libero egestas ullamcorper lacinia et viverrka auctor. Semper lobortis
          vitae vitae in malesuada molestie. Ante elementum massa pretium, sit
          arcu. Porta blandit tincidunt urna magna. Insert your terms and
          conditions text here.
        </p>

        <p className="text-sm mb-6 top-2">
          Orci, et ipsum gravida eget risus. Nunc velit quam pellentesque
          viverra. Feugiat mi purus ornare vitae aliquet cras tellus velit
          sociis. Ut augue tellus sed at. Duis morbi lorem nibh amet, mus urna,
          purus velit. Mi condimentum laoreet sed iaculis nunc vestibulum nunc
          diam tortor. Pulvinar orci, non lectus nec duis. Adipiscing vitae
          augue sed sapien purus. Porttitor at eu mi, non enim nunc diam. Vel
          nisl cursus nam risus morbi ac venenatis faucibus ac. Enim ullamcorper
          nullam in aliquam, curabitur dapibus risus interdum cursus. Arcu et
          quis egestas scelerisque tempor, mauris. Dictum amet odio pellentesque
          dis euismod diam arcu, pellentesque. Leo sem pellentesque pretium
          volutpat quam consequat. Eu nec consectetur mus consectetur eget.
          Vitae eu ultrices adipiscing commodo. Interdum vivamus enim ut diam
          nisl.
        </p>

        <p className="text-sm mb-6 top-2">
          Lacus dapibus urna blandit turpis pulvinar adipiscing eu aliquam.
          Lectus scelerisque arcu aliquet feugiat velit ut nunc massa in. Sed
          sapien ut molestie ipsum. Sed tristique ullamcorper ornare vitae
          accumsan malesuada ac facilisis. Posuere lorem duis adipiscing cras
          nisl.
        </p>

        <p className="text-sm mb-6 top-2">
          Eget gravida orci congue quis etiam condimentum mattis. Nibh morbi
          aliquam et, lectus rhoncus. Nullam lacus, urna quis tempus varius.
          Amet, venenatis, scelerisque dignissim sed. Tellus fermentum.
        </p>
      </div>
      <div>
        <h3 className="text-secondary text-2xl  mb-4 font-semibold">
          Est sem adipiscing commodo cursus.
        </h3>
        <p className="text-sm mb-6 top-2">
          Sagittis eleifend tincidunt semper eget venenatis nulla viverra.
          Pharetra, nascetur sit turpis feugiat vestibulum semper orci. Lacus
          pretium in aliquet tristique. Eget mollis nam eu, sem mattis
          suspendisse ac. Dictum ultrices dolor suspendisse donec elit integer.
        </p>
      </div>

      <div>
        <h3 className="text-secondary text-2xl  mb-4 font-semibold">
          Tincidunt.
        </h3>
        <p className="text-sm mb-6 top-2">
          Amet, elit fames quis consequat. Vel, mattis tellus in turpis
          elementum tellus id vitae. Nibh quis ut bibendum cursus amet, vitae
          metus scelerisque quam. Nibh bibendum augue urna, sed nulla ultrices
          molestie aenean id. Consequat tortor vestibulum feugiat vulputate.
          Ipsum mattis morbi.
        </p>
      </div>
      <button
        className="block mx-auto py-2 px-4 bg-secondary text-white font-bold rounded"
        onClick={handleCloseButtonClick}
      >
        Close
      </button>
    </div>
  );
};

export default TermsOfService;
