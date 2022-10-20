Use Flight;
	
	Create Table Adminlogin(
			 Adminname varchar(100) NOT NULL  primary key,
				 Password Varchar(100) NOT NULL,
      		);
  


	Create Table UserLogin(
	            	Username varchar(100) NOT NULL  primary key,
				 Password Varchar(100) NOT NULL,
               );


	CREATE TABLE Flightdetails(
		Id int,
    		FlightNo int NOT NULL PRIMARY KEY,
    		FlightName VARCHAR(100) NOT NULL,
		ArrivalTime datetime,
    		DepartureTime datetime,
    		Origin VARCHAR(100) NOT NULL,
    		Destination VARCHAR (100) NOT NULL,
    		SeatsAvailabile varchar(10),
    		Oneway varchar(50),
		Roundtrip varchar(50),
		Ticketcost int,
   	);


	CREATE TABLE Ticketbooking(
			Id int,
     			UserName VARCHAR(100),
			Email VARCHAR(100),
    			FlightNo int NOT NULL PRIMARY KEY,,
    			PNR int  Identity(1,1) NOT NULL,
    			Origin VARCHAR(100) NOT NULL,
    			Destination VARCHAR(100) NOT NULL ,
    			ArrivalTime datetime,
    			DepartureTime datetime,
    			NoofSeattobook int,
			Passengerdetails VARCHAR(100) NOT NULL,
			Meal VARCHAR(100) NOT NULL,
			Seatno int,
    	FOREIGN KEY (FlightNo) REFERENCES Flightdetails (FlightNo)
	);


	Create Table UserRegistration(
		Id int,
		FirstName Varchar(100) ,
		LastName Varchar(100),
		PhoneNumber Varchar(50) ,
		Username Varchar(100) Primary Key,
		Email Varchar(100),
		Password Varchar(100)
		ConfirmPassword Varchar(100)
	);
    
