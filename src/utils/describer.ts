export enum Describe {
  listing = 'Display a listing of the resource',
  storing = 'Store a newly created resource in storage.',
  displaySpecific = 'Display the specified resource.',
  updateSpecific = 'Update the specified resource.',
  deleteSpecific = 'Delete the specified resource.',
  filterable = 'This endpoints are filterable, meaning that you can use Query Parameters listed below to specifically loads the records.<br><br>' +
    'Please note that these parameters are optional.<br>' +
    'When these are ommitted, the default values set by the server will be used.',
}
