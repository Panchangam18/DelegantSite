// import { useAuth } from 'wasp/client/auth';
// import { stripePayment } from 'wasp/client/operations';
// import { TierIds } from '../../shared/constants';
// import { AiFillCheckCircle } from 'react-icons/ai';
// import { useState } from 'react';
// import { useHistory } from 'react-router-dom';
// import { cn } from '../../shared/utils';
// import { z } from 'zod';

// export const tiers = [
//   {
//     name: 'Hobby',
//     id: TierIds.HOBBY,
//     price: '$9.99',
//     description: 'All you need to get started',
//     features: ['Limited monthly usage', 'Basic support'],
//   },
//   {
//     name: 'Pro',
//     id: TierIds.PRO,
//     price: '$19.99',
//     description: 'Our most popular plan',
//     features: ['Unlimited monthly usage', 'Priority customer support'],
//     bestDeal: true,
//   },
//   {
//     name: '10 Credits',
//     id: TierIds.CREDITS,
//     price: '$9.99',
//     description: 'One-time purchase of 10 credits for your account',
//     features: ['Use credits for e.g. OpenAI API calls', 'No expiration date'],
//   },
// ];

// const PricingPage = () => {
//   const [isStripePaymentLoading, setIsStripePaymentLoading] = useState<boolean | string>(false);

//   const { data: user, isLoading: isUserLoading } = useAuth();

//   const history = useHistory();

//   async function handleBuyNowClick(tierId: string) {
//     if (!user) {
//       history.push('/login');
//       return;
//     }
//     try {
//       setIsStripePaymentLoading(tierId);
//       let stripeResults = await stripePayment(tierId);

//       if (stripeResults?.sessionUrl) {
//         window.open(stripeResults.sessionUrl, '_self');
//       }
//     } catch (error: any) {
//       console.error(error?.message ?? 'Something went wrong.');
//     } finally {
//       setIsStripePaymentLoading(false);
//     }
//   }

//   const handleCustomerPortalClick = () => {
//     if (!user) {
//       history.push('/login');
//       return;
//     }
//     try {
//       const schema = z.string().url();
//       const customerPortalUrl = schema.parse(import.meta.env.REACT_APP_STRIPE_CUSTOMER_PORTAL);
//       window.open(customerPortalUrl, '_blank');
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   return (
//     <div className='py-10 lg:mt-10'>
//       <div className='mx-auto max-w-7xl px-6 lg:px-8'>
//         <div id='pricing' className='mx-auto max-w-4xl text-center'>
//           <h2 className='mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl dark:text-white'>
//             Pick your <span className='text-teal-500'>pricing</span>
//           </h2>
//         </div>
//         <p className='mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-600 dark:text-white'>
//           Stripe subscriptions and secure webhooks are built-in. Just add your Stripe Product IDs! Try it out below with
//           test credit card number{' '}
//           <span className='px-2 py-1 bg-gray-100 rounded-md text-gray-500'>4242 4242 4242 4242 4242</span>
//         </p>
//         <div className='isolate mx-auto mt-16 grid max-w-md grid-cols-1 gap-y-8 lg:gap-x-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3'>
//           {tiers.map((tier) => (
//             <div
//               key={tier.id}
//               className={cn(
//                 'relative flex flex-col grow justify-between rounded-3xl ring-gray-900/10 dark:ring-gray-100/10 overflow-hidden p-8 xl:p-10',
//                 {
//                   'ring-2': tier.bestDeal,
//                   'ring-1 lg:mt-8': !tier.bestDeal,
//                 }
//               )}
//             >
//               {tier.bestDeal && (
//                 <div className='absolute top-0 right-0 -z-10 w-full h-full transform-gpu blur-3xl' aria-hidden='true'>
//                   <div
//                     className='absolute w-full h-full bg-gradient-to-br from-amber-400 to-purple-300 opacity-30 dark:opacity-50'
//                     style={{
//                       clipPath: 'circle(670% at 50% 50%)',
//                     }}
//                   />
//                 </div>
//               )}
//               <div className='mb-8'>
//                 <div className='flex items-center justify-between gap-x-4'>
//                   <h3 id={tier.id} className='text-gray-900 text-lg font-semibold leading-8 dark:text-white'>
//                     {tier.name}
//                   </h3>
//                 </div>
//                 <p className='mt-4 text-sm leading-6 text-gray-600 dark:text-white'>{tier.description}</p>
//                 <p className='mt-6 flex items-baseline gap-x-1 dark:text-white'>
//                   <span className='text-4xl font-bold tracking-tight text-gray-900 dark:text-white'>{tier.price}</span>
//                   <span className='text-sm font-semibold leading-6 text-gray-600 dark:text-white'>
//                     {tier.id !== TierIds.CREDITS && '/month'}
//                   </span>
//                 </p>
//                 <ul role='list' className='mt-8 space-y-3 text-sm leading-6 text-gray-600 dark:text-white'>
//                   {tier.features.map((feature) => (
//                     <li key={feature} className='flex gap-x-3'>
//                       <AiFillCheckCircle className='h-6 w-5 flex-none text-teal-500' aria-hidden='true' />
//                       {feature}
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//               {!!user && !!user.subscriptionStatus ? (
//                 <button
//                   onClick={handleCustomerPortalClick}
//                   aria-describedby='manage-subscription'
//                   className={cn(
//                     'mt-8 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-teal-400',
//                     {
//                       'bg-teal-500 text-white hover:text-white shadow-sm hover:bg-teal-400': tier.bestDeal,
//                       'text-gray-600 ring-1 ring-inset ring-purple-200 hover:ring-purple-400': !tier.bestDeal,
//                     }
//                   )}
//                 >
//                   Manage Subscription
//                 </button>
//               ) : (
//                 <button
//                   onClick={() => handleBuyNowClick(tier.id)}
//                   aria-describedby={tier.id}
//                   className={cn(
//                     {
//                       'bg-teal-500 text-white hover:text-white shadow-sm hover:bg-teal-400': tier.bestDeal,
//                       'text-gray-600  ring-1 ring-inset ring-purple-200 hover:ring-purple-400': !tier.bestDeal,
//                     },
//                     {
//                       'opacity-50 cursor-wait cursor-not-allowed': isStripePaymentLoading === tier.id,
//                     },
//                     'mt-8 block rounded-md py-2 px-3 text-center text-sm dark:text-white font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-teal-400'
//                   )}
//                 >
//                   {!!user ? 'Buy plan' : 'Log in to buy plan'}
//                 </button>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PricingPage;


import React from 'react';
import { useAuth } from 'wasp/client/auth';
import { stripePayment } from 'wasp/client/operations';
import { TierIds, STRIPE_CUSTOMER_PORTAL_LINK } from '../../shared/constants';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';


const CheckIcon = () => (
  <svg
    className="flex-shrink-0 w-5 h-5 text-green-500"
    fill="currentColor"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
      clipRule="evenodd"
    ></path>
  </svg>
);

const tiers = [
  {
    id: 'starter',
    title: 'Starter',
    monthlyPrice: '$19',
    annualPrice: '$190',
    features: [
      'Access to your choice of one tool',
      'Limited Usage',
      'Minimal setup',
      'Email support: 2 months',
      'Free updates: Forever',
    ],
    description: 'Best option for businesses looking to explore our tools',
  },
  {
    id: 'company',
    title: 'Company',
    monthlyPrice: '$99',
    annualPrice: '$990',
    features: [
      'Access to all tools',
      'Limited Usage',
      'Minimal Setup',
      'Consulation Calls: 3 months',
      'Email support: Forever',
    ],
    description: 'Best for mid-scale businesses looking to scale up their operations',
  },
  {
    id: 'enterprise',
    title: 'Enterprise',
    monthlyPrice: '$499',
    annualPrice: '$4990',
    features: [
      'Access to all tools',
      'Unlimited Usage',
      'Ability to request tools and get personalized tool modifications',
      'Consulation Calls: Forever',
      'Direct line of Communication to CEO',
    ],
    description: 'Best for large scale uses and hyper-personalized modifications',
  },
];

const PricingSection = () => {
  const [isStripePaymentLoading, setIsStripePaymentLoading] = useState<boolean | string>(false);
  const [isAnnual, setIsAnnual] = useState(false);
  const { data: user, isLoading: isUserLoading } = useAuth();
  const history = useHistory();

  async function handleBuyNowClick(tierId: string) {
    console.log('handleBuyNowClick called with tierId:', tierId);
  
    if (!user) {
      history.push('/login');
      return;
    }
  
    try {
      setIsStripePaymentLoading(tierId);
      const pricingPlanId = isAnnual ? `${tierId}_annual` : `${tierId}_monthly`;
      console.log('Calling stripePayment with pricingPlanId:', pricingPlanId);
      const stripeResults = await stripePayment(pricingPlanId);
  
      console.log('Stripe results:', stripeResults);
  
      if (stripeResults?.sessionUrl) {
        window.open(stripeResults.sessionUrl, '_self');
      }
    } catch (error: any) {
      console.error('Error in handleBuyNowClick:', error?.message ?? 'Something went wrong.');
    } finally {
      setIsStripePaymentLoading(false);
    }
  }
  
  return (
    <section className="bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-white">
            Pricing designed for <span className="font-extrabold text-color3">your</span> business
          </h2>
          <p className="mb-5 font-light text-gray-400 sm:text-xl">
            Here at Lexal, we focus on making sure that you can get the <span className="font-extrabold text-color3">transformational benefits</span> of our tools without breaking the bank. So we offer a range of pricing plans to suit your needs.
          </p>
        </div>
        <div className="flex justify-center mb-8">
          <div className="relative inline-flex bg-gray-700 rounded-lg">
            <button
              className={`px-6 py-3 rounded-l-lg relative z-10 transition-colors duration-300 ${
                isAnnual ? 'text-gray-400' : 'text-white'
              }`}
              onClick={() => setIsAnnual(false)}
            >
              Monthly
            </button>
            <button
              className={`px-6 py-3 rounded-r-lg relative z-10 transition-colors duration-300 ${
                isAnnual ? 'text-white' : 'text-gray-400'
              }`}
              onClick={() => setIsAnnual(true)}
            >
              Annual
            </button>
            <span
              className={`absolute inset-y-0 left-0 w-1/2 bg-gray-800 rounded-lg transition-all duration-300 ease-in-out transform ${
                isAnnual ? 'translate-x-full' : ''
              }`}
            ></span>
          </div>
        </div>
        <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
          {tiers.map((tier) => (
            <div
              key={tier.id}
              className="flex flex-col p-6 mx-auto max-w-lg text-center text-white bg-gray-800 rounded-lg border border-gray-600 shadow xl:p-8"
            >
              <h3 className="mb-4 text-2xl font-semibold">{tier.title}</h3>
              <p className="font-light text-gray-400 sm:text-lg">{tier.description}</p>
              <div className="flex justify-center items-baseline my-8">
                <span className="mr-2 text-5xl font-extrabold">
                  {isAnnual ? tier.annualPrice : tier.monthlyPrice}
                </span>
                <span className="text-gray-400">{isAnnual ? '/year' : '/month'}</span>
              </div>
              <ul role="list" className="mb-8 space-y-4 text-left">
                {tier.features.map((feature, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <CheckIcon />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              {user && user.hasPaid ? (
                <a
                  href={STRIPE_CUSTOMER_PORTAL_LINK}
                  className="text-white bg-transparent border border-color2 hover:bg-color2 focus:ring-4 focus:ring-color2 font-medium rounded-lg text-sm px-5 py-2.5 text-center transition duration-300 ease-in-out"
                >
                  Manage Subscription
                </a>
              ) : (
                <button
                  onClick={() => handleBuyNowClick(tier.id)}
                  className="text-white bg-transparent border border-color2 hover:bg-color2 focus:ring-4 focus:ring-color2 font-medium rounded-lg text-sm px-5 py-2.5 text-center transition duration-300 ease-in-out"
                >
                  {tier.id === 'enterprise' ? 'Get Started Now' : 'Get Started Now'}
                  {/* Have to change the above to Contact Us once I set up the contact page */}
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;