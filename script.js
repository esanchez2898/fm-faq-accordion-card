this.addEventListener("DOMContentLoaded", () => {                                           
// This is a JavaScript event that fires when the entire Document Object Model (DOM) tree has been loaded for a web page. 

    const questions = document.querySelectorAll('.question')

    questions.forEach((question) => question.addEventListener('click', () => {
        if (question.parentNode.classList.contains('active')) {                                  // Search in the parent's question if there is the class 'active'
            question.parentNode.classList.toggle("active")                                       // If there is the class active so remove it, now nobody have this class
        } else {
            questions.forEach(question => question.parentNode.classList.remove('active'))        // Go one by one for all the elements and search and remove the class 'active'                
            question.parentNode.classList.add('active')                                          // Once you remove all the clases add the new one in the element clicked
        }
    }))

})