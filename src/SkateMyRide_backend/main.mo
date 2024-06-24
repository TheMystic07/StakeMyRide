import Text "mo:base/Text";
import Principal "mo:base/Principal";
import HashMap "mo:base/HashMap";
import Iter "mo:base/Iter";
// import List "mo:base/List";
// import Buffer "mo:base/Buffer";

actor StakeMyRide{
type User = {
  id :Principal;
  name : Text;
  rating : Nat;
};
type Seller = {
  id :Principal;
  name : Text;
  rating : Nat;
  vehicles: [Vehicle];
};
type Vehicle = {
  id :Principal;
  // seller : Seller;
  make : Text;
  model : Text;
  year : Nat;
  rating : Nat;
  // rides : HashMap.HashMap<Principal, Ride >(0, Principal.equal, Principal.hash);
};


type Ride ={
  id : Principal;
  user : User;
  from : Text;
  to : Text;
  price : Nat;
  rating : Nat;
  seats : Nat;
};


let users = HashMap.HashMap<Principal, User >(0, Principal.equal, Principal.hash);
let sellers = HashMap.HashMap<Principal, Seller >(0, Principal.equal, Principal.hash);



   public shared(msg) func test():async Text{
        return  Principal.toText(msg.caller) ;
   };

  public shared(msg) func registerUser(name: Text ) : async Text {

    let user = {
      id = msg.caller;
      name = name;
      rating = 0;
    };
    users.put(msg.caller, user);
    return "User Registered";
  };

  public query func getUser() : async [User] {
   let iter : Iter.Iter<User> = users.vals();
    Iter.toArray<User>(iter);
  };





  public shared(msg) func registerSeller(name:Text ) : async Text {

  let emp : [Vehicle] = [];
    let seller = {
      id = msg.caller;
      name = name;
       rating = 0;
       vehicles = emp ;
    };
    sellers.put(msg.caller, seller);
    return "Seller Registered";
  };

  public shared(msg)  func addVehicle(make: Text, model: Text, year: Nat) : async Vehicle {
    // var seller = sellers.get(msg.caller);
    let vehicle : Vehicle = {
      id = msg.caller;
      // seller = ;
      make = make;
      model = model;
      year = year;
      rating = 0;
    };
    return vehicle;
    // Array.toText(vehicles);
    // var veh = seller.vehicles;
    
    // return "Vehicle Added";
  };



  public query func getSeller() : async [Seller] {

   let iter : Iter.Iter<Seller> = sellers.vals();
    Iter.toArray<Seller>(iter);
  };

};


// public shared(msg) func createRide(from: Text, to: Text, price: Nat16, seats: Nat8) : async Text{
//   let user = users.get(msg.caller);
//   let ride = {
//     id = msg.caller;
//     user = user;
//     from = from;
//     to = to;
//     price = price;
//     rating = 0;
//     seats = seats;
//   };


// return "Ride Created";
// };

