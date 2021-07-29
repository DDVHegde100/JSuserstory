//UserStories-BookDonation&RequestApp
//Open to all users, everyone has ability to request.
//Administrator Work: Check User, Restrict amount of book requests
//Authentication Work: EmailID and password needed.

User(someoneRequestingBook)
//To request a book of choice. By filing a form, you can make a request. 
//UserInformation, BookName, ReasonForRequest need to be provided.
//As a user, a notification must be provided in order to confirm the request status.
//If accepted, users will need to receive the book properly. 
//Donor needs to also receive conformation upon the user receiving the book.
 User(donorOfABook)
//To donate the book, information must be provided for donated book.
//Requests must be analyzed by the donor, in case that multiple people want a book.
//Requests should be simple and easy to access.
//For exmaple, if you are donating Harry Potter, you need to have a filter and searchField in order to narrow down the requests that are received.
//As a donor, the user must have a choice to pay for transit and shipping directly online.
//Once the book is sent, a message must be sent to the user that requested and will soon be receiving the book.
//Once the book is donated, and no longer active, the form for that book must automatically close.
//Once the user receives the book, they must message the donor upon receioving it to confirm that it reached them.
User(Workflow)
User(bookRequest)
//User must be autheticated, by logging into their account.
//*If the user isvisiting the app for their 1st time, they will be required to sign up and make an account.
//Selection between Donation Page and Request Page. 2 tabs.
//Browse the catalog of availible books to request.
//Once book selected, the user needs to fill the form for the book. Form must contain emailID, user's name, user's address, reason for their request, etc.
//One active request at a time, meaning they can only request 1 book and only when it is approved or denies can they request another.
//Once the request is accepted, they will confirm the status and ship the book.
//*If there is a pending request, you will not be allowedto request again.
//On the app, you will be able to check your pending ststaus on request. Options are: Accepted, Rejected, Pending...

User(Workflow)
User(bookDonation)
//User must be autherticated, and login to their account, just like everyone else.
//Selection between Donation and Request Page. 2 tabs. Donation tab for donors.
//Section to list out availible books that the user will put up for donation.\
//For each book, he must be able to view the requests corresponding it, and it must be compiled into a category.
//In that category, there must be a sarchField or organization method that allows the donor to easily scan and read through the requests, accorind to the given book.
//In that cateogry, the donor must be able to respond to the requests and/or update their status to Accepted or Rejected