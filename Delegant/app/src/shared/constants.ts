export enum TierIds {
  HOBBY = 'hobby-tier',
  PRO = 'pro-tier',
  CREDITS = 'credits',
}

export const DOCS_URL = 'https://docs.opensaas.sh';
export const BLOG_URL = 'https://docs.opensaas.sh/blog';

export enum TierIds {
  HOBBY_MONTHLY = 'starter_monthly',
  HOBBY_ANNUAL = 'starter_annual',
  PRO_MONTHLY = 'company_monthly',
  PRO_ANNUAL = 'company_annual',
  ENTERPRISE_MONTHLY = 'enterprise_monthly',
  ENTERPRISE_ANNUAL = 'enterprise_annual',
}

const isDevEnv = process.env.NODE_ENV !== 'production';
const customerPortalTestUrl = 'https://billing.stripe.com/p/login/test_4gw4h47pd7KqfAI5kk'; // TODO: find your test url at https://dashboard.stripe.com/test/settings/billing/portal
const customerPortalProdUrl = 'https://billing.stripe.com/p/login/4gwcNF2Eubrj4da000'; // TODO: add before deploying to production


export const STRIPE_CUSTOMER_PORTAL_LINK = isDevEnv ? customerPortalTestUrl : customerPortalProdUrl;