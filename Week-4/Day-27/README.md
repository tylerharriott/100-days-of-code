# Day 27 - HTML5/CSS3 Fundamentals

### HTML elements:

- header
- nav
- ul
- li
---
### CSS 4 link states:

- link
- visited
- hover
- active
---
### CSS3 transitions for small animations

```css
.btn:link,
.btn:visited {

    display: inline-block;
    padding: 10px 30px;
    font-weight: 300;
    text-decoration: none;
    border-radius: 200px;
    transition: background-color 0.2s, border 0.2s, color 0.2s;          /* A transition to make elements look seamless */
    
}
```
---
### Make img as high as browser viewport

```css
header {
    background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(img/hero.jpg);         /* Linear-gradient() is used to change the gradient colors of an img  */                                                                                            
    background-size: cover;
    background-position: center;
    height: 100vh;
}
```

### Creating a simple navigation

```css
 <nav>
    <div class="row">
       <img src="resources\img\logo-white.png" alt="Omnifood logo" class="logo">
       <ul class="main-nav">
            <li><a href="#">Food delivery</a></li>
            <li><a href="#">How it works</a></li>
            <li><a href="#">Our cities</a></li>
            <li><a href="#">Sign up</a></li>
       </ul>
    </div>
</nav>

```

