const MOBILE_ROUTES = {
    ON_BOARDING_SELECT_BS_TYPE: 'OnboardingBsTypes'
};
export const ROUTES = {
    'web': {
        ON_BOARDING_SELECT_BS_TYPE: '/onboarding/bs-types'
    },
    'android': {
        ...MOBILE_ROUTES
    },
    'ios': {
        ...MOBILE_ROUTES
    }
};
