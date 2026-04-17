## What to look for:

### 1. Folder structure

Look at how the frontend is structured. Is the architecture you've seen/implemented in other projects also respected here? If not, create the folders needed and clean up the project directory accordingly.

### 2. Template syntax

You should see some syntax which is not up to date with the latest standards. Replace them with the latest approach.

### 3. Type safety

Somewhere in this codebase, `any` is used where it should not be. TypeScript interfaces already exist for most of the data you just need to connect them. If you see `any`, that's a red flag.

### 4. Dependency injection style

Angular has two ways to inject dependencies. One is older, one is the modern idiomatic approach. Find the inconsistencies and pick one style throughout.

### 5. RxJS pipelines

Look at the reactive pipelines in the project. Ask yourself for each operator: is this doing something real, or is it just noise? A pipeline that uses five operators to do what two could do is a problem. Also check whether subscriptions are ever closed if not, that is a memory leak.

### 6. Signals: the right tool for the job

Angular Signals have two main primitives for read-only derived values - one for values that come from other signals, and one for values that come from external side effects. Check whether they are used correctly throughout the codebase.

### 7. HTTP calls: where do they belong?

In Angular, HTTP calls should not live in components. Look at every place `HttpClient` is injected and ask: is this the right place for this?

### 8. NgRx: does data flow through the store?

If you are using NgRx, all server data should flow through actions → effects → reducer → selectors. Find any places where that pipeline is bypassed.

### 9. Small details matter

Read string literals carefully. A typo that is invisible to the eye can still break your application.

### 10. Routing: is the router actually doing anything?

### 11. Lifecycle hooks and the compiler

Several components define `ngOnInit` but never declare which interface they implement.

### 12. Where does the API URL live?

Search for `localhost:3000` across the frontend. If this project were deployed to staging, how many files would need to change? There is a standard Angular pattern for this.

### 13. The order things appear in a component class

A reader should be able to scan a component top to bottom and understand it in one pass: what it depends on, what state it holds, how it initializes, and what it does. Look at the components in this project - are properties ever declared the right way? The conventional order is:

1. Injected dependencies - `inject()`
2. Inputs - `@Input()` / `input()`
3. Outputs - `@Output()` / `output()`
4. Protected state
5. Public state
6. Private state
7. Constructor - only if injection requires it; otherwise omit
8. Lifecycle hooks in the order Angular calls them (`ngOnChanges`, `ngOnInit`, `ngAfterViewInit`, `ngOnDestroy`)
9. Public methods - event handlers and anything the template calls
10. Private methods - helpers called only from within the class
