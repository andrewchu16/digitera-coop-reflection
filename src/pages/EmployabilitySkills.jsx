import { BeforeAfterToggle } from "../components/TwoToggle";
import independentWork from "../assets/independent-work.svg";
import timeManagement from "../assets/time-management.svg";
import problemSolving from "../assets/lightbulb.svg";
import communication from "../assets/communication.svg";

function EmployabilitySkills() {
  return (
    <div className="bg-slate-50 pt-4 pb-12 md:px-16 px-4">
      <h1 className="md:text-4xl text-2xl mb-4">Employability Skills</h1>
      <p className="text-lg">
        Over the course of my co-op placement at Digitera, I was able to grow as
        a person and improve my employability skills. These are some of the ways
        I have changed throughout the semester.
      </p>
      <h2 className="md:text-3xl text-xl my-4">Independent Work</h2>
      <img
        src={independentWork}
        className="m-auto md:w-1/3 w-full"
        lazy="true"
      />
      <BeforeAfterToggle
        beforeText={
          <>
            <p className="mb-2">
              At the beginning of my co-op, I set out to improve my independent
              work skills. Mainly, my ability to work timely and efficiently
              while taking on multiple responsibilities. I was planning on
              taking various extracurricular classes, joining several clubs, and
              working at a job during the year on top of my co-op. Since I just
              started out, I did not know my co-op work schedule or what my
              workload would be like. Regardless, I knew I had a lot to improve
              on if I wanted to do well in my courses.
            </p>
            <p>
              A few weeks into my placement, I learned what my co-op
              responsibilities were. I learned that I was starting on a new
              project that I would get relatively free-rein over alongside
              another co-op student from my school. However, I would have to
              learn certain new technologies myself that I was not expected to
              learn over the summer. I was told to learn PHP but I ended up
              working on a project using Flutter and Firebase. I also learned
              that I had a quite flexible work schedule that would enable me to
              work throughout the day. I had many options.
            </p>
          </>
        }
        afterText={
          <>
            <p>
              I have proven to myself that I am (more or less) capable of
              managing multiple expectations throughout the year. I am satisfied
              with my grades and skills I have learned during my co-op. I have
              learned how to use Flutter and Firebase. I had the opportunity to
              spend 2.5 hours to focus on problem-solving everyday at my co-op.
              This positively contributed to my ability to work and study under
              my own directive.
            </p>
          </>
        }
      />
      <h2 className="md:text-3xl text-xl my-8 mb-4">Time Management</h2>
      <img
        src={timeManagement}
        className="m-auto md:w-1/3 w-full"
        lazy="true"
      />
      <BeforeAfterToggle
        beforeText={
          <>
            <p>
              One of my goals at the beginning of the year was to improve my
              time management. I was about to take on many responsibilities that
              would require a more efficient use of my time. I wanted to make
              sure I could reach my goals without sacrificing my sleep schedule.
              When I started my co-op, I was struggling to sleep at a reasonable
              time, especially coming from the summer break. I found that
              staying up late led to less efficient work, which in turn led to
              staying up late. It was an endless cycle for me. I was hoping that
              co-op would give me the workload and mentality to change my sleep
              schedule.
            </p>
          </>
        }
        afterText={
          <>
            <p>
              As of the end of the semester, my sleep schedule has not improved
              much. I found that co-op did not help significantly, and that it
              would take something drastic to make an impact. As a remote co-op
              student I had the ability to work whenever I wanted. But, for the
              vast majority of days, I chose to go to school so I could focus
              better. I chose not to sleep in as I knew it would lead to me
              waking up later and later, not improving the long-term health of
              my sleep. Co-op gave me the ability to practice these skills for
              myself.
            </p>
            <p className="mt-4">
              Additionally, it helped divide my time into blocks so I could be
              more efficient. Occassionally, I would be set back by a hackathon
              where I'd get little sleep or a band camp that takes up a week of
              my time. However, I always made my way back on track. I would then
              reallocate my flexible co-op hours so I could focus on what had
              the most immediate priority first.
            </p>
            <p className="mt-4">
              However, I can definitely say that I have improved my overall time
              management. With so much control over my work, I could essentially
              choose what to work on from day to day. This autonomy gave me a
              sense of drive to complete my tasks: I was the one who chose it.
              Each day, I would set out a goal that I would aim to complete by
              the end of my co-op time. Sending the weekly reports to Jordan
              helped ensure I consistently monitored my progress, tracking and
              organizing the work I completed.
            </p>
          </>
        }
      />
      <h2 className="md:text-3xl text-xl my-8 mb-4">Problem-Solving</h2>
      <img
        src={problemSolving}
        className="m-auto md:w-1/3 w-full"
        lazy="true"
      />
      <BeforeAfterToggle
        beforeText={
          <>
            <p>
              I did not have any experience creating a graphical application in
              Flutter before I started this co-op. Rather, I barely had any
              experience creating any graphical application before my co-op. I
              struggled to understand why problems would occur and how to fix
              them. It almost felt like reading a foreign language.
            </p>
          </>
        }
        afterText={
          <>
            <p>
              Almost every day of my co-op has required some form of
              problem-solving. Whenever the code stopped working or I wanted to
              implement a new feature, I had the opportunity to find new ways to
              tackle design problems. Gradually, I became better at solving the
              problems that would occur with graphical applications.
            </p>
          </>
        }
      />
      <h2 className="md:text-3xl text-xl my-8 mb-4">Communication</h2>
      <img src={communication} className="m-auto md:w-1/3 w-full" lazy="true" />
      <BeforeAfterToggle
        beforeText={
          <>
            <p>
              Before co-op, I barely had any experience communicating with my
              employer. I would be nervous to attend every single meeting. I
              also did not know what it would be like to work with a large team.
            </p>
          </>
        }
        afterText={
          <>
            <p>
              I am now less nervous to talk to my boss during meetings and ask
              questions. I feel that I can comfortably communicate my needs when
              necessary.
            </p>
            <p className="mt-4">
              Ultimately, I did not end up working in a large team of people I
              did not know. I wish that I could have tried this experience at
              least once during the term. There was no one besides me and the
              other co-op student I was working with who knew how to work with
              the project. The school news project was restarted this year. I
              wished that I could have had a little introduction at the
              beginning of the year with an experienced engineer. Instead, I
              become more experienced at problem solving, when I would have
              rather improved my communication skills.
            </p>
          </>
        }
      />
    </div>
  );
}

export default EmployabilitySkills;
