import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Navbar8 from '../components/navbar8'
import Hero17 from '../components/hero17'
import Features24 from '../components/features24'
import CTA26 from '../components/cta26'
import Features25 from '../components/features25'
import Pricing14 from '../components/pricing14'
import Steps2 from '../components/steps2'
import Testimonial17 from '../components/testimonial17'
import Contact10 from '../components/contact10'
import Footer4 from '../components/footer4'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Only Closed Badger</title>
        <meta property="og:title" content="Only Closed Badger" />
      </Helmet>
      <Navbar8
        page4Description={
          <Fragment>
            <span className="home-text100">Get in touch with us</span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="home-text101">Get Started</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="home-text102">#services</span>
          </Fragment>
        }
        page1={
          <Fragment>
            <span className="home-text103">Home</span>
          </Fragment>
        }
        link1={
          <Fragment>
            <span className="home-text104">#</span>
          </Fragment>
        }
        page4={
          <Fragment>
            <span className="home-text105">Contact</span>
          </Fragment>
        }
        page2={
          <Fragment>
            <span className="home-text106">Services</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="home-text107">#contact</span>
          </Fragment>
        }
        page1Description={
          <Fragment>
            <span className="home-text108">Welcome to StartEasyAI</span>
          </Fragment>
        }
        page2Description={
          <Fragment>
            <span className="home-text109">Explore our AI services</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="home-text110">#about</span>
          </Fragment>
        }
        page3={
          <Fragment>
            <span className="home-text111">About Us</span>
          </Fragment>
        }
        page3Description={
          <Fragment>
            <span className="home-text112">
              Learn more about our startup helper
            </span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="home-text113">Learn More</span>
          </Fragment>
        }
      ></Navbar8>
      <Hero17
        action2={
          <Fragment>
            <span className="home-text114">Learn More</span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="home-text115">Get Started</span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text116">Welcome to StartEasyAI</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text117">
              Your one-stop solution for generating logos and finding names for
              your startup. Simply input some information, and let us handle the
              rest.
            </span>
          </Fragment>
        }
      ></Hero17>
      <Features24
        feature3Description={
          <Fragment>
            <span className="home-text118">
              Find unique names for your startup
            </span>
          </Fragment>
        }
        feature3Title={
          <Fragment>
            <span className="home-text119">Name Generation</span>
          </Fragment>
        }
        feature2Description={
          <Fragment>
            <span className="home-text120">Easy-to-use interface</span>
          </Fragment>
        }
        feature1Title={
          <Fragment>
            <span className="home-text121">Logo Generation</span>
          </Fragment>
        }
        feature1Description={
          <Fragment>
            <span className="home-text122">
              Automatically create logos based on your input
            </span>
          </Fragment>
        }
        feature2Title={
          <Fragment>
            <span className="home-text123">User-Friendly Interface</span>
          </Fragment>
        }
      ></Features24>
      <CTA26
        heading1={
          <Fragment>
            <span className="home-text124">
              Ready to kickstart your startup?
            </span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text125">
              Let StartEasyAI help you with generating logos and finding the
              perfect name for your business.
            </span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="home-text126">Get started now</span>
          </Fragment>
        }
      ></CTA26>
      <Features25
        feature3Description={
          <Fragment>
            <span className="home-text127">
              Easily customize the generated logos to fit your brand identity
              and make them truly yours.
            </span>
          </Fragment>
        }
        feature1Description={
          <Fragment>
            <span className="home-text128">
              Our platform uses advanced AI algorithms to generate unique and
              creative logos for your startup.
            </span>
          </Fragment>
        }
        feature2Title={
          <Fragment>
            <span className="home-text129">Name Suggestions</span>
          </Fragment>
        }
        feature1Title={
          <Fragment>
            <span className="home-text130">AI Logo Generation</span>
          </Fragment>
        }
        feature2Description={
          <Fragment>
            <span className="home-text131">
              StartEasyAI provides intelligent name suggestions based on the
              information you input, helping you find the perfect name for your
              startup.
            </span>
          </Fragment>
        }
        feature3Title={
          <Fragment>
            <span className="home-text132">Customization Options</span>
          </Fragment>
        }
      ></Features25>
      <Pricing14
        plan3Price={
          <Fragment>
            <span className="home-text133">$79.99/month</span>
          </Fragment>
        }
        plan3Action={
          <Fragment>
            <span className="home-text134">Get Started</span>
          </Fragment>
        }
        plan11={
          <Fragment>
            <span className="home-text135">Basic plan</span>
          </Fragment>
        }
        plan1Action={
          <Fragment>
            <span className="home-text136">Get Started</span>
          </Fragment>
        }
        plan31={
          <Fragment>
            <span className="home-text137">Enterprise plan</span>
          </Fragment>
        }
        plan3Feature41={
          <Fragment>
            <span className="home-text138">Feature text goes here</span>
          </Fragment>
        }
        plan1Feature2={
          <Fragment>
            <span className="home-text139">Name Generation</span>
          </Fragment>
        }
        plan2Feature11={
          <Fragment>
            <span className="home-text140">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature51={
          <Fragment>
            <span className="home-text141">Feature text goes here</span>
          </Fragment>
        }
        plan2Feature41={
          <Fragment>
            <span className="home-text142">Feature text goes here</span>
          </Fragment>
        }
        plan2Feature2={
          <Fragment>
            <span className="home-text143">Name Generation</span>
          </Fragment>
        }
        plan3Feature21={
          <Fragment>
            <span className="home-text144">Feature text goes here</span>
          </Fragment>
        }
        plan2Feature4={
          <Fragment>
            <span className="home-text145">Feature text goes here</span>
          </Fragment>
        }
        plan2Yearly={
          <Fragment>
            <span className="home-text146">$499.99/year</span>
          </Fragment>
        }
        plan1Action1={
          <Fragment>
            <span className="home-text147">Get started</span>
          </Fragment>
        }
        plan2Action={
          <Fragment>
            <span className="home-text148">Get Started</span>
          </Fragment>
        }
        plan3Feature1={
          <Fragment>
            <span className="home-text149">Logo Generation</span>
          </Fragment>
        }
        plan2Feature3={
          <Fragment>
            <span className="home-text150">Advanced Support</span>
          </Fragment>
        }
        plan1Price1={
          <Fragment>
            <span className="home-text151">$200/yr</span>
          </Fragment>
        }
        plan2={
          <Fragment>
            <span className="home-text152">Business plan</span>
          </Fragment>
        }
        plan2Feature21={
          <Fragment>
            <span className="home-text153">Feature text goes here</span>
          </Fragment>
        }
        plan2Action1={
          <Fragment>
            <span className="home-text154">Get started</span>
          </Fragment>
        }
        plan3Feature2={
          <Fragment>
            <span className="home-text155">Name Generation</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text156">
              Choose the perfect plan for you
            </span>
          </Fragment>
        }
        plan2Feature1={
          <Fragment>
            <span className="home-text157">Logo Generation</span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text158">Pricing plan</span>
          </Fragment>
        }
        plan3Feature31={
          <Fragment>
            <span className="home-text159">Feature text goes here</span>
          </Fragment>
        }
        plan1={
          <Fragment>
            <span className="home-text160">Basic plan</span>
          </Fragment>
        }
        plan21={
          <Fragment>
            <span className="home-text161">Business plan</span>
          </Fragment>
        }
        plan1Feature11={
          <Fragment>
            <span className="home-text162">Feature text goes here</span>
          </Fragment>
        }
        plan1Feature21={
          <Fragment>
            <span className="home-text163">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature5={
          <Fragment>
            <span className="home-text164">Feature text goes here</span>
          </Fragment>
        }
        plan2Yearly1={
          <Fragment>
            <span className="home-text165">or $29 monthly</span>
          </Fragment>
        }
        plan2Price={
          <Fragment>
            <span className="home-text166">$49.99/month</span>
          </Fragment>
        }
        plan3Yearly1={
          <Fragment>
            <span className="home-text167">or $49 monthly</span>
          </Fragment>
        }
        plan2Feature31={
          <Fragment>
            <span className="home-text168">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature11={
          <Fragment>
            <span className="home-text169">Feature text goes here</span>
          </Fragment>
        }
        plan1Yearly1={
          <Fragment>
            <span className="home-text170">or $20 monthly</span>
          </Fragment>
        }
        plan2Price1={
          <Fragment>
            <span className="home-text171">$299/yr</span>
          </Fragment>
        }
        plan3Yearly={
          <Fragment>
            <span className="home-text172">$799.99/year</span>
          </Fragment>
        }
        plan3Feature4={
          <Fragment>
            <span className="home-text173">Feature text goes here</span>
          </Fragment>
        }
        plan3Price1={
          <Fragment>
            <span className="home-text174">$499/yr</span>
          </Fragment>
        }
        plan1Feature31={
          <Fragment>
            <span className="home-text175">Feature text goes here</span>
          </Fragment>
        }
        plan1Feature3={
          <Fragment>
            <span className="home-text176">Basic Support</span>
          </Fragment>
        }
        plan1Yearly={
          <Fragment>
            <span className="home-text177">$299.99/year</span>
          </Fragment>
        }
        plan1Feature1={
          <Fragment>
            <span className="home-text178">Logo Generation</span>
          </Fragment>
        }
        plan3Feature3={
          <Fragment>
            <span className="home-text179">Priority Support</span>
          </Fragment>
        }
        content2={
          <Fragment>
            <span className="home-text180">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </Fragment>
        }
        plan3Action1={
          <Fragment>
            <span className="home-text181">Get started</span>
          </Fragment>
        }
        plan1Price={
          <Fragment>
            <span className="home-text182">$29.99/month</span>
          </Fragment>
        }
        plan3={
          <Fragment>
            <span className="home-text183">Enterprise plan</span>
          </Fragment>
        }
      ></Pricing14>
      <Steps2
        step1Description={
          <Fragment>
            <span className="home-text184">
              Tell us about your business idea and industry to get started.
            </span>
          </Fragment>
        }
        step3Description={
          <Fragment>
            <span className="home-text185">
              Get unique and creative name suggestions for your startup.
            </span>
          </Fragment>
        }
        step2Title={
          <Fragment>
            <span className="home-text186">Generate Logo Options</span>
          </Fragment>
        }
        step2Description={
          <Fragment>
            <span className="home-text187">
              Our AI will create logo options based on the information you
              provide.
            </span>
          </Fragment>
        }
        step1Title={
          <Fragment>
            <span className="home-text188">Enter Your Business Idea</span>
          </Fragment>
        }
        step3Title={
          <Fragment>
            <span className="home-text189">Name Generation</span>
          </Fragment>
        }
        step4Description={
          <Fragment>
            <span className="home-text190">
              Download your logo files and chosen business name to kickstart
              your startup journey.
            </span>
          </Fragment>
        }
        step4Title={
          <Fragment>
            <span className="home-text191">Download Your Assets</span>
          </Fragment>
        }
      ></Steps2>
      <Testimonial17
        author2Position={
          <Fragment>
            <span className="home-text192">Founder, Startup X</span>
          </Fragment>
        }
        author1Position={
          <Fragment>
            <span className="home-text193">CEO, Tech Co.</span>
          </Fragment>
        }
        author1Name={
          <Fragment>
            <span className="home-text194">John Doe</span>
          </Fragment>
        }
        author3Name={
          <Fragment>
            <span className="home-text195">David Lee</span>
          </Fragment>
        }
        review2={
          <Fragment>
            <span className="home-text196">
              Impressed with the quality of logos generated by StartEasyAI.
              Great tool for startups!
            </span>
          </Fragment>
        }
        author2Name={
          <Fragment>
            <span className="home-text197">Jane Smith</span>
          </Fragment>
        }
        author4Position={
          <Fragment>
            <span className="home-text198">
              Marketing Director, Digital Agency
            </span>
          </Fragment>
        }
        author4Name={
          <Fragment>
            <span className="home-text199">Sarah Johnson</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text200">
              Read what our customers have to say about StartEasyAI
            </span>
          </Fragment>
        }
        author3Position={
          <Fragment>
            <span className="home-text201">CTO, Software Corp.</span>
          </Fragment>
        }
        review1={
          <Fragment>
            <span className="home-text202">
              StartEasyAI helped us streamline our processes and improve
              efficiency. Highly recommended!
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text203">Testimonials</span>
          </Fragment>
        }
        review3={
          <Fragment>
            <span className="home-text204">
              StartEasyAI made it easy for us to find a unique name for our new
              project. Excellent service!
            </span>
          </Fragment>
        }
        review4={
          <Fragment>
            <span className="home-text205">
              Using StartEasyAI saved us time and effort in branding our
              business. Fantastic results!
            </span>
          </Fragment>
        }
      ></Testimonial17>
      <Contact10
        content1={
          <Fragment>
            <span className="home-text206">
              Have questions or need support? Reach out to us!
            </span>
          </Fragment>
        }
        location1Description={
          <Fragment>
            <span className="home-text207">
              123 Startup Street, City Name, Country
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text208">Contact Us</span>
          </Fragment>
        }
        location2Description={
          <Fragment>
            <span className="home-text209">
              456 Support Street, City Name, Country
            </span>
          </Fragment>
        }
        location1={
          <Fragment>
            <span className="home-text210">Headquarters</span>
          </Fragment>
        }
        location2={
          <Fragment>
            <span className="home-text211">Support Center</span>
          </Fragment>
        }
      ></Contact10>
      <Footer4
        link5={
          <Fragment>
            <span className="home-text212">Privacy Policy</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="home-text213">FAQs</span>
          </Fragment>
        }
        link1={
          <Fragment>
            <span className="home-text214">About Us</span>
          </Fragment>
        }
        termsLink={
          <Fragment>
            <span className="home-text215">Terms and Conditions</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="home-text216">Contact Us</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="home-text217">Terms and Conditions</span>
          </Fragment>
        }
        cookiesLink={
          <Fragment>
            <span className="home-text218">Cookies Policy</span>
          </Fragment>
        }
        privacyLink={
          <Fragment>
            <span className="home-text219">Privacy Policy</span>
          </Fragment>
        }
      ></Footer4>
    </div>
  )
}

export default Home
