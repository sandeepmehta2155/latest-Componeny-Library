import React, { useState } from "react";
function Home() {
  return (
    <div
      className="tab-pane fade show active"
      id="v-pills-home"
      role="tabpanel"
      aria-labelledby="v-pills-home-tab"
    >
      Cillum ad ut irure tempor velit nostrud occaecat ullamco aliqua anim Lorem
      sint. Veniam sint duis incididunt do esse magna mollit excepteur laborum
      qui. Id id reprehenderit sit est eu aliqua occaecat quis et velit
      excepteur laborum mollit dolore eiusmod. Ipsum dolor in occaecat commodo
      et voluptate minim reprehenderit mollit pariatur. Deserunt non laborum
      enim et cillum eu deserunt excepteur ea incididunt minim occaecat.
    </div>
  );
}

function Profile() {
  return (
    <div
      className="tab-pane fade"
      id="v-pills-profile"
      role="tabpanel"
      aria-labelledby="v-pills-profile-tab"
    >
      Culpa dolor voluptate do laboris laboris irure reprehenderit id incididunt
      duis pariatur mollit aute magna pariatur consectetur. Eu veniam duis non
      ut dolor deserunt commodo et minim in quis laboris ipsum velit id veniam.
      Quis ut consectetur adipisicing officia excepteur non sit. Ut et elit
      aliquip labore Lorem enim eu. Ullamco mollit occaecat dolore ipsum id
      officia mollit qui esse anim eiusmod do sint minim consectetur qui.
    </div>
  );
}

function Messages() {
  return (
    <div
      className="tab-pane fade"
      id="v-pills-messages"
      role="tabpanel"
      aria-labelledby="v-pills-messages-tab"
    >
      Fugiat id quis dolor culpa eiusmod anim velit excepteur proident dolor
      aute qui magna. Ad proident laboris ullamco esse anim Lorem Lorem veniam
      quis Lorem irure occaecat velit nostrud magna nulla. Velit et et proident
      Lorem do ea tempor officia dolor. Reprehenderit Lorem aliquip labore est
      magna commodo est ea veniam consectetur.
    </div>
  );
}

function Settings() {
  return (
    <div
      className="tab-pane fade"
      id="v-pills-settings"
      role="tabpanel"
      aria-labelledby="v-pills-settings-tab"
    >
      Eu dolore ea ullamco dolore Lorem id cupidatat excepteur reprehenderit
      consectetur elit id dolor proident in cupidatat officia. Voluptate
      excepteur commodo labore nisi cillum duis aliqua do. Aliqua amet qui
      mollit consectetur nulla mollit velit aliqua veniam nisi id do Lorem
      deserunt amet. Culpa ullamco sit adipisicing labore officia magna elit
      nisi in aute tempor commodo eiusmod.
    </div>
  );
}
export default function Navigation() {
  const [verticalPillsContent, setVerticalPillsContent] = useState(<Home />);
  return (
    <div>
      <h1>Base nav</h1>
      Navigation available in Bootstrap share general markup and styles, from
      the base .nav className to the active and disabled states. Swap modifier
      classes to switch between each style. The base .nav component is built
      with flexbox and provide a strong foundation for building all types of
      navigation components. It includes some style overrides (for working with
      lists), some link padding for larger hit areas, and basic disabled
      styling.
      <nav className="navig">
        <ul className="nav justify-content-center">
          <li className="nav-item">
            <a className="nav-link active" href=" ">
              Active
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href=" ">
              Link
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href=" ">
              Link
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link disabled"
              href=" "
              tabindex="-1"
              aria-disabled="true"
            >
              Disabled
            </a>
          </li>
        </ul>
      </nav>
      <h1> Horizontal alignment</h1>
      Change the horizontal alignment of your nav with flexbox utilities. By
      default, navs are left-aligned, but you can easily change them to center
      or right aligned.
      <nav className="navig">
        <ul className="navig justify-content-center">
          <li className="nav-item">
            <a className="nav-link active" href=" ">
              Active
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href=" ">
              Link
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href=" ">
              Link
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link disabled"
              href=" "
              tabindex="-1"
              aria-disabled="true"
            >
              Disabled
            </a>
          </li>
        </ul>
      </nav>
      <h1>Vertical</h1>
      Stack your navigation by changing the flex item direction with the
      .flex-column utility. Need to stack them on some viewports but not others?
      Use the responsive versions (e.g., .flex-sm-column).
      <nav className="navig">
        <ul className="navig flex-column">
          <li className="nav-item">
            <a className="nav-link active" href=" ">
              Active
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href=" ">
              Link
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href=" ">
              Link
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link disabled"
              href=" "
              tabindex="-1"
              aria-disabled="true"
            >
              Disabled
            </a>
          </li>
        </ul>
      </nav>
      <h1> Tabs</h1>
      Takes the basic nav from above and adds the .nav-tabs className to
      generate a tabbed interface. Use them to create tabbable regions with our
      tab JavaScript plugin.
      <nav className="navig">
        <ul className="navig nav-tabs">
          <li className="nav-item">
            <a className="nav-link active" href=" ">
              Active
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href=" ">
              Link
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href=" ">
              Link
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link disabled"
              href=" "
              tabindex="-1"
              aria-disabled="true"
            >
              Disabled
            </a>
          </li>
        </ul>
      </nav>
      <div className="row">
        <h1> And with vertical pills.</h1>
        <div
          className="nav-link tabs"
          onClick={() => setVerticalPillsContent(<Home />)}
        >
          Home
        </div>
        <div
          className="nav-link tabs"
          onClick={() => setVerticalPillsContent(<Profile />)}
        >
          Profile
        </div>
        <div
          className="nav-link tabs"
          onClick={() => setVerticalPillsContent(<Messages />)}
        >
          Messages
        </div>
        <div
          className="nav-link tabs"
          onClick={() => setVerticalPillsContent(<Settings />)}
        >
          Settings
        </div>
        <div className="pillsContent">{verticalPillsContent}</div>
      </div>
    </div>
  );
}
