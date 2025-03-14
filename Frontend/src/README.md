tour_management_system--/
├─ public/
│  ├─ images/
│  │  ├─ 1.jpg
│  │  ├─ 3.jpg
│  │  └─ 8.jpg
│  └─ vite.svg
├─ src/
│  ├─ components/
│  │  ├─ Admin/
│  │  │  ├─ AdminNavigationBar/
│  │  │  │  └─ AdminNavigationBar.jsx
│  │  │  ├─ Admin.css
│  │  │  ├─ AdminAddTours.jsx
│  │  │  ├─ AdminTours.jsx
│  │  │  ├─ AdminUpdateTours.jsx
│  │  │  └─ App.css
│  │  ├─ Auth/
│  │  │  ├─ Login Page/
│  │  │  │  └─ Login.jsx
│  │  │  ├─ Signup Page/
│  │  │  │  └─ Signup.jsx
│  │  │  └─ Auth.css
│  │  ├─ Home Page/
│  │  │  ├─ Home.css
│  │  │  └─ Homepage.jsx
│  │  ├─ Routing/
│  │  │  └─ App.jsx
│  │  └─ User/
│  │     ├─ UserNavigationBar/
│  │     │  └─ UserNavigationBar.jsx
│  │     ├─ BookedTours.jsx
│  │     ├─ User.css
│  │     └─ UserViewTours.jsx
│  ├─ icon/
│  ├─ service/
│  │  └─ UserService.js
│  ├─ App.css
│  ├─ index.css
│  ├─ index.js
│  ├─ main.jsx
│  ├─ reportWebVitals.js
│  └─ setupTests.js
├─ .gitignore
├─ eslint.config.js
├─ index.html
├─ package-lock.json
├─ package.json
├─ README.md
└─ vite.config.js

Back END File Structure////
tourbooking/
├─ .idea/
│  ├─ .gitignore
│  ├─ compiler.xml
│  ├─ encodings.xml
│  ├─ jarRepositories.xml
│  ├─ misc.xml
│  └─ workspace.xml
├─ .mvn/
│  └─ wrapper/
│     └─ maven-wrapper.properties
├─ .settings/
│  ├─ org.eclipse.core.resources.prefs
│  ├─ org.eclipse.jdt.apt.core.prefs
│  ├─ org.eclipse.jdt.core.prefs
│  └─ org.eclipse.m2e.core.prefs
├─ .vscode/
│  └─ settings.json
├─ bin/
│  ├─ .mvn/
│  │  └─ wrapper/
│  │     └─ maven-wrapper.properties
│  ├─ .settings/
│  │  └─ org.eclipse.core.resources.prefs
│  ├─ src/
│  │  ├─ main/
│  │  │  ├─ java/
│  │  │  │  └─ com/
│  │  │  │     └─ example/
│  │  │  │        └─ tourbooking/
│  │  │  │           └─ TourbookingApplication.class
│  │  │  └─ resources/
│  │  │     ├─ templates/
│  │  │     └─ application.properties
│  │  └─ test/
│  │     └─ java/
│  │        └─ com/
│  │           └─ example/
│  │              └─ tourbooking/
│  │                 └─ TourbookingApplicationTests.class
│  ├─ target/
│  │  └─ classes/
│  │     └─ META-INF/
│  │        └─ MANIFEST.MF
│  ├─ .gitattributes
│  ├─ .gitignore
│  ├─ .project
│  ├─ HELP.md
│  ├─ mvnw
│  ├─ mvnw.cmd
│  └─ pom.xml
├─ src/
│  ├─ main/
│  │  ├─ java/
│  │  │  └─ com/
│  │  │     └─ example/
│  │  │        └─ tourbooking/
│  │  │           ├─ controller/
│  │  │           │  ├─ AuthController.java
│  │  │           │  ├─ BookingController.java
│  │  │           │  └─ ItineraryController.java
│  │  │           ├─ dto/
│  │  │           │  ├─ BookingDTO.java
│  │  │           │  ├─ ItineraryDTO.java
│  │  │           │  └─ UserDTO.java
│  │  │           ├─ exception/
│  │  │           │  └─ GlobalExceptionHandler.java
│  │  │           ├─ model/
│  │  │           │  ├─ AuthRequest.java
│  │  │           │  ├─ Booking.java
│  │  │           │  ├─ Itinerary.java
│  │  │           │  └─ User.java
│  │  │           ├─ repository/
│  │  │           │  ├─ BookingRepository.java
│  │  │           │  ├─ ItineraryRepository.java
│  │  │           │  └─ UserRepository.java
│  │  │           ├─ security/
│  │  │           │  ├─ CorsConfig.java
│  │  │           │  ├─ CustomHttpFirewall.java
│  │  │           │  ├─ JwtFilter.java
│  │  │           │  ├─ JwtUserService.java
│  │  │           │  ├─ JwtUtil.java
│  │  │           │  └─ SecurityConfig.java
│  │  │           ├─ service/
│  │  │           │  ├─ AuthService.java
│  │  │           │  ├─ BookingService.java
│  │  │           │  └─ ItineraryService.java
│  │  │           ├─ util/
│  │  │           │  └─ EmailUtil.java
│  │  │           └─ TourbookingApplication.java
│  │  └─ resources/
│  │     ├─ static/
│  │     ├─ templates/
│  │     └─ application.properties
│  └─ test/
│     └─ java/
│        └─ com/
│           └─ example/
│              └─ tourbooking/
│                 └─ TourbookingApplicationTests.java
├─ target/
│  ├─ classes/
│  │  ├─ com/
│  │  │  └─ example/
│  │  │     └─ tourbooking/
│  │  │        ├─ controller/
│  │  │        │  ├─ AuthController.class
│  │  │        │  ├─ BookingController.class
│  │  │        │  └─ ItineraryController.class
│  │  │        ├─ dto/
│  │  │        │  ├─ BookingDTO.class
│  │  │        │  ├─ ItineraryDTO.class
│  │  │        │  └─ UserDTO.class
│  │  │        ├─ exception/
│  │  │        │  └─ GlobalExceptionHandler.class
│  │  │        ├─ model/
│  │  │        │  ├─ AuthRequest.class
│  │  │        │  ├─ Booking.class
│  │  │        │  ├─ Itinerary.class
│  │  │        │  └─ User.class
│  │  │        ├─ repository/
│  │  │        │  ├─ BookingRepository.class
│  │  │        │  ├─ ItineraryRepository.class
│  │  │        │  └─ UserRepository.class
│  │  │        ├─ security/
│  │  │        │  ├─ CorsConfig.class
│  │  │        │  ├─ CustomHttpFirewall.class
│  │  │        │  ├─ JwtFilter.class
│  │  │        │  ├─ JwtUserService.class
│  │  │        │  ├─ JwtUtil.class
│  │  │        │  └─ SecurityConfig.class
│  │  │        ├─ service/
│  │  │        │  ├─ AuthService.class
│  │  │        │  ├─ BookingService.class
│  │  │        │  └─ ItineraryService.class
│  │  │        ├─ util/
│  │  │        │  └─ EmailUtil.class
│  │  │        └─ TourbookingApplication.class
│  │  └─ application.properties
│  ├─ generated-sources/
│  │  └─ annotations/
│  ├─ generated-test-sources/
│  │  └─ test-annotations/
│  ├─ maven-status/
│  │  └─ maven-compiler-plugin/
│  │     ├─ compile/
│  │     │  └─ default-compile/
│  │     │     ├─ createdFiles.lst
│  │     │     └─ inputFiles.lst
│  │     └─ testCompile/
│  │        └─ default-testCompile/
│  │           ├─ createdFiles.lst
│  │           └─ inputFiles.lst
│  ├─ surefire-reports/
│  │  ├─ 2025-03-05T16-15-32_285.dumpstream
│  │  ├─ com.example.tourbooking.TourbookingApplicationTests.txt
│  │  └─ TEST-com.example.tourbooking.TourbookingApplicationTests.xml
│  └─ test-classes/
│     └─ com/
│        └─ example/
│           └─ tourbooking/
│              └─ TourbookingApplicationTests.class
├─ .classpath
├─ .gitattributes
├─ .gitignore
├─ .project
├─ HELP.md
├─ mvnw
├─ mvnw.cmd
└─ pom.xml

