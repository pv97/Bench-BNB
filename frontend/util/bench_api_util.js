export const fetchBenches = success => {
  $.ajax({
    method:'get',
    url:'api/bench',
    success,
    error: () => console.log('error')
  });
};
