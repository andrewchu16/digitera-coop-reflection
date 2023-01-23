import { BeforeAfterToggle } from "../components/TwoToggle";
import security from "../assets/security.svg";
import mobile from "../assets/mobile.svg";
import flutterLogo from "../assets/flutter-logo.svg";
import firebaseLogo from "../assets/firebase-logo.svg";
import appPitch from "../assets/app-pitch.svg";
import reactLogo from "../assets/react-logo.svg";
import jsLogo from "../assets/js-logo.svg";

function SoftwareSkills() {
  return (
    <div className="bg-slate-50 pt-4 pb-12 md:px-16 px-4">
      <h1 className="md:text-4xl text-2xl mb-2">Software Skills</h1>
      <p className="text-lg">
        I learned a lot of software development skills during my co-op term. The
        skills I learned for co-op also helped me learn other skills on my own
        time.
      </p>
      <h2 className="md:text-3xl text-xl my-4">Making Mobile Apps</h2>
      <img src={mobile} className="m-auto md:w-1/3 w-full" lazy="true" />
      <BeforeAfterToggle
        beforeText={
          <>
            <p>
              I knew no skills necessary to make a mobile app. None of the
              programming languages I learned in school or on my own could be
              used to make a mobile app.
            </p>
          </>
        }
        afterText={
          <>
            <p>
              I learned some technologies that could be used for making mobile
              apps. For co-op, I learned Flutter, a programming library that
              lets you create desktop, mobile, and web applications. However,
              for most of the co-op, I only practiced using Flutter for web
              while Melanie worked on the mobile side. I also learned Javascript
              on my own, which can also be used for mobile applications. This
              website is designed to be viewable on a phone.
            </p>
            <div className="flex md:flex-row flex-col gap-2 mt-2 justify-center h-48">
              <img src={flutterLogo} className="" lazy="true" />
            </div>
          </>
        }
      />
      <h2 className="md:text-3xl text-xl my-4">Security</h2>
      <img src={security} className="m-auto md:w-1/3 w-full" lazy="true" />
      <BeforeAfterToggle
        beforeText={
          <>
            <p>
              I have limited experience with creating a secure application. I
              have created log in systems for small projects, but those have
              never been designed tobe released publicly and to scale to users
              around the country.
            </p>
          </>
        }
        afterText={
          <>
            <p>
              I learned how to use Firebase to manage the security of user data
              that is exposed online. I learned how to prevent malicious users
              from being able to access the private information.
            </p>
            <div className="flex md:flex-row flex-col gap-2 mt-2 justify-center h-48">
              <img src={firebaseLogo} lazy="true" />
            </div>
          </>
        }
      />
      <h2 className="md:text-3xl text-xl my-4">Pitching an App</h2>
      <img src={appPitch} className="m-auto md:w-1/3 w-full" lazy="true" />
      <BeforeAfterToggle
        beforeText={
          <>
            <p>
              Before the semester, I had only pitched a programming project
              twice. These were both for hackathons, not actual possible
              investors.
            </p>
          </>
        }
        afterText={
          <>
            <p>
              Around December, I had the experience of pitching my app to the
              principal of my school for beta testing. I learned how difficult
              it is to get an app authorized by administration due to privacy
              concerns. I wished that I had the opportunity to see how Jordan
              would pitch the app, but I never reached the stage where that
              would be possible. During the year, I also had the opportunity to
              pitch an app at a hackathon, contributing to the development of my
              pitching skills.
            </p>
          </>
        }
      />
      <h2 className="md:text-3xl text-xl my-4">Designing Websites</h2>
      <BeforeAfterToggle
        beforeText={
          <>
            <p>
              Before my co-op term, I started learning how to create websites
              with PHP and Javascript. I had no practical experience making a
              website.
            </p>
          </>
        }
        afterText={
          <>
            <p>
              Now, I have the ability to make my own websites. I learned design
              techniques for website through my co-op. I was able to build on
              the skills I learned during my co-op to learn proper website
              development on my own time. I know how to use Flutter, Javascript,
              and React to make websites now.
            </p>
            <div className="flex md:flex-row flex-col gap-2 mt-2 justify-center h-48">
              <img src={jsLogo} lazy="true" />
              <img src={reactLogo} lazy="true" />
            </div>
          </>
        }
      />
    </div>
  );
}

export default SoftwareSkills;
/*
developing websites
- making several websites
- attending hackathons
pitching app
- pitched to principal
- never experienced how he would do it
*/
