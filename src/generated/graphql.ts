export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type Consumer = {
  __typename?: 'Consumer';
  id: Scalars['ID'];
  email: Scalars['String'];
  selfieUuid?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  consumerPhotos: Array<ConsumerPhoto>;
};

export type ConsumerAnswer = {
  __typename?: 'ConsumerAnswer';
  id: Scalars['ID'];
  answer: Scalars['String'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  consumer: Consumer;
  question: Question;
};

export type ConsumerPhoto = {
  __typename?: 'ConsumerPhoto';
  id: Scalars['ID'];
  similarity: Scalars['Float'];
  boxXMax: Scalars['Float'];
  boxXMin: Scalars['Float'];
  boxYMax: Scalars['Float'];
  boxYMin: Scalars['Float'];
  photo: Photo;
  consumer: Consumer;
};

export type CreateEventInput = {
  name: Scalars['String'];
  startTime: Scalars['DateTime'];
  endTime: Scalars['DateTime'];
  gcsBucket?: Maybe<Scalars['String']>;
};

export type CreatePartnerInput = {
  name: Scalars['String'];
  email: Scalars['String'];
};

export type CreateQuestionInput = {
  content: Scalars['String'];
};

export type CreateUserInput = {
  /** Username */
  username: Scalars['String'];
  /** Password */
  password: Scalars['String'];
};

export type Event = {
  __typename?: 'Event';
  id: Scalars['ID'];
  name: Scalars['String'];
  startTime: Scalars['DateTime'];
  endTime: Scalars['DateTime'];
  gcsBucket?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  eventPartners: Array<EventPartner>;
};

export type EventPartner = {
  __typename?: 'EventPartner';
  id: Scalars['ID'];
  partner: Partner;
  event: Event;
};

export type LoginInput = {
  username: Scalars['String'];
  password: Scalars['String'];
};

export type LoginType = {
  __typename?: 'LoginType';
  username: Scalars['String'];
  accessToken: Scalars['String'];
  expiredIn: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createUser: User;
  updateUser: User;
  removeUser: User;
  login: LoginType;
  verifyConsumer: VerifyConsumerType;
  newPhoto: Scalars['Boolean'];
  createEvent: Event;
  updateEvent: Event;
  removeEvent: Event;
  createPartner: Partner;
  updatePartner: Partner;
  removePartner: Partner;
  sponsorEvent: EventPartner;
  removeEventPartner: Scalars['Boolean'];
  createQuestion: Question;
  updateQuestion: Question;
  removeQuestion: Question;
  specifyPartnerQuestion: PartnerQuestion;
  removePartnerQuestion: Scalars['Boolean'];
};

export type MutationCreateUserArgs = {
  createUserInput: CreateUserInput;
};

export type MutationUpdateUserArgs = {
  updateUserInput: UpdateUserInput;
};

export type MutationRemoveUserArgs = {
  id: Scalars['Int'];
};

export type MutationLoginArgs = {
  loginInput: LoginInput;
};

export type MutationVerifyConsumerArgs = {
  selfie: Scalars['Upload'];
  email: Scalars['String'];
};

export type MutationNewPhotoArgs = {
  filename: Scalars['String'];
};

export type MutationCreateEventArgs = {
  createEventInput: CreateEventInput;
};

export type MutationUpdateEventArgs = {
  updateEventInput: UpdateEventInput;
};

export type MutationRemoveEventArgs = {
  id: Scalars['Int'];
};

export type MutationCreatePartnerArgs = {
  createPartnerInput: CreatePartnerInput;
};

export type MutationUpdatePartnerArgs = {
  updatePartnerInput: UpdatePartnerInput;
};

export type MutationRemovePartnerArgs = {
  id: Scalars['Int'];
};

export type MutationSponsorEventArgs = {
  partnerId: Scalars['Int'];
  eventId: Scalars['Int'];
};

export type MutationRemoveEventPartnerArgs = {
  id: Scalars['Int'];
};

export type MutationCreateQuestionArgs = {
  createQuestionInput: CreateQuestionInput;
};

export type MutationUpdateQuestionArgs = {
  updateQuestionInput: UpdateQuestionInput;
};

export type MutationRemoveQuestionArgs = {
  id: Scalars['Int'];
};

export type MutationSpecifyPartnerQuestionArgs = {
  partnerId: Scalars['Int'];
  questionId: Scalars['Int'];
};

export type MutationRemovePartnerQuestionArgs = {
  id: Scalars['Int'];
};

export type Partner = {
  __typename?: 'Partner';
  id: Scalars['ID'];
  name: Scalars['String'];
  email: Scalars['String'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  eventPartners: Array<EventPartner>;
  partnerQuestions: Array<PartnerQuestion>;
};

export type PartnerQuestion = {
  __typename?: 'PartnerQuestion';
  id: Scalars['ID'];
  partner: Partner;
  question: Question;
};

export type Photo = {
  __typename?: 'Photo';
  id: Scalars['ID'];
  filename: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  users: Array<User>;
  user: User;
  me: User;
  myPhotosInEvent: Array<ConsumerPhoto>;
  consumers: Array<Consumer>;
  events: Array<Event>;
  event: Event;
  partners: Array<Partner>;
  partner: Partner;
  questions: Array<Question>;
};

export type QueryUserArgs = {
  id: Scalars['Int'];
};

export type QueryMyPhotosInEventArgs = {
  eventId: Scalars['Int'];
};

export type QueryEventArgs = {
  id: Scalars['Int'];
};

export type QueryPartnerArgs = {
  id: Scalars['Int'];
};

export type Question = {
  __typename?: 'Question';
  id: Scalars['ID'];
  content: Scalars['String'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  consumerAnswers: Array<ConsumerAnswer>;
};

export type UpdateEventInput = {
  name?: Maybe<Scalars['String']>;
  startTime?: Maybe<Scalars['DateTime']>;
  endTime?: Maybe<Scalars['DateTime']>;
  gcsBucket?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
};

export type UpdatePartnerInput = {
  name?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
};

export type UpdateQuestionInput = {
  content?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
};

export type UpdateUserInput = {
  /** Username */
  username?: Maybe<Scalars['String']>;
  /** Password */
  password?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
};

export type User = {
  __typename?: 'User';
  id: Scalars['ID'];
  username: Scalars['String'];
  password: Scalars['String'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
};

export type VerifyConsumerType = {
  __typename?: 'VerifyConsumerType';
  email: Scalars['String'];
  accessToken: Scalars['String'];
  expiresIn: Scalars['String'];
};
