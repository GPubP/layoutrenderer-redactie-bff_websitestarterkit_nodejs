export const STATUS_MESSAGES = {
  OK: 'ok',
  OUTAGE: 'outage',
  DEGRADED: 'degraded'
};

export function checkComponents() {
  const checkSelf = {
    name: 'layoutrenderer-starterkit',
    details: '',
    type: 'website',
    code: 200,
    status: STATUS_MESSAGES.OK
  };
  return { status: checkSelf.status, components: [checkSelf] };
}
