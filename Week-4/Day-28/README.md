# Day 28: CSS Transitions


### A grid of beautiful images
```html
        <section class="section=meals">
            <!-- Row 1 images -->
            <ul class="meals-showcase">
                <li>
                    <figure class="meal-photo">  <!-- Figure tag, it can hold an img and a caption for an img  -->
                       <img src="resources/img/1.jpg" alt="Korean bibimbap with egg and vegetables">                                
                    </figure>
                </li>
                <li>
                    <figure class="meal-photo">
                       <img src="resources/img/2.jpg" alt="Simple italian pizza with cherry tomatoes">                                   
                    </figure>
                </li>
                <li>
                    <figure class="meal-photo">
                       <img src="resources/img/3.jpg" alt="Chicken breast steak with vegetables">                                      
                    </figure>
                </li>
                <li>
                    <figure class="meal-photo">
                       <img src="resources/img/4.jpg" alt="Autumn pumpkin soup">                                      
                    </figure>
                </li>
            </ul>
        </section>

```

---


### "Zoom-in" transition, only using CSS
```css
/* When the user sees the img  */
.meal-photo img {
    transform: scale(1.15);
    transition: transform 0.5s;
}

/* When the user hovers over the img  */
.meal-photo img:hover {
    transform: scale(1.03);
}
```

---

### A way to make ```<img>``` elements darker

```css
.meal-photo img {
    opacity: 0.7;
    width: 100%;
    height: auto;
    transition: opacity 0.5s;
}

.meal-photo img:hover {
    opacity: 1;
}
```





