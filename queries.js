/* Fill out these functions using Mongoose queries*/

var findLibraryWest = function() {
  /*
    Find the document that contains data corresponding to Library West,
    then log it to the console.
   */
   Listing.find({ name: 'Library West' }, function(err, bldg) {
  if (err) throw err;

  // object of the user
  console.log(bldg);
  };
};
var removeCable = function() {
  /*
    Find the document with the code 'CABL'. This cooresponds with courses that can only be viewed
    on cable TV. Since we live in the 21st century and most courses are now web based, go ahead
    and remove this listing from your database and log the document to the console.
   */
   Listing.findOneAndRemove({ code: 'CABL' }, function(err) {
  if (err) throw err;

  // we have deleted the user
  console.log('document deleted!');
  };
};
var updatePhelpsLab = function() {
  /*
    Phelps Laboratory's address is incorrect. Find the listing, update it, and then
    log the updated document to the console.
   */
   Listing.find({ name: 'Phelps Laboratory'}, function(err, bldg) {
     if (err) throw err;

  // change the users location
    Listing.address = '1234 Address Ave.';

  // save the user
  Listing.save(function(err) {
    if (err) throw err;

    console.log('Building updated!');
    };
  };
};
var retrieveAllListings = function() {
  /*
    Retrieve all listings in the database, and log them to the console.
   */
   Listing.find({}, function(err, bldgs) {
  if (err) throw err;

  // object of all the users
  console.log(bldgs);
};
};

findLibraryWest();
removeCable();
updatePhelpsLab();
retrieveAllListings();
