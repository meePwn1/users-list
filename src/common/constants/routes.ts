export const ROUTES = {
  HOME: '/',
  OUR_TEAM: '/our-team',
  OUR_TEAM_MEMBER: (memberId: string = ':memberId') => `/our-team/${memberId}`,
  SIGN_IN: '/sign-in',
  SIGN_UP: '/sign-up',
}
