export const ROUTES = {
  HOME: '/',
  OUR_TEAM: '/our-team',
  SIGN_IN: '/sign-in',
  SIGN_UP: '/sign-up',
  TEAM_MEMBER: (memberId: string = ':memberId') => `/our-team/${memberId}`,
}
