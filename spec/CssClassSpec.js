/*global describe it beforeEach expect CssClass*/
describe("CssClass", function() {
    var el;
   
    beforeEach(function() {
        el = document.createElement("a");
    });
    
    describe("is", function() {
        it("should return false when el has no class attribute", function() {
            expect(CssClass.is(el, "foo")).toBe(false);
        });
        
        it("should return false when el's class attribute is an empty string", function() {
            el.className = "";
            expect(CssClass.is(el, "foo")).toBe(false);
        });
        
        it("should return true when el's class attibute is the exact class given", function() {
            el.className = "foo";
            expect(CssClass.is(el, "foo")).toBe(true);
        });
        
        it("should return true when el's class attibute includes the given class", function() {
            el.className = "foo bar";
            expect(CssClass.is(el, "foo")).toBe(true);
        });
        
        it("should correctly identify classes with dashes, underscores and digits", function() {
            el.className = "foo-bar_2";
            expect(CssClass.is(el, "foo-bar_2")).toBe(true);
        });

        it("should be case-sensitive", function() {
            el.className = "Foo";
            expect(CssClass.is(el, "foo")).toBe(false);
        });        
    });
    
    describe("add", function() {
        it("should add the given class when the class attribute does not yet exist", function() {
            CssClass.add(el, "foo");
            expect(el.className).toBe("foo");
        });
        
        it("should add the given class when the class attribute is an empty string", function() {
            el.className = "";
            CssClass.add(el, "foo");
            expect(el.className).toBe("foo");
        });
        
        it("should append the given class to existing classes", function() {
            el.className = "bar";
            CssClass.add(el, "foo");
            expect(el.className).toBe("bar foo");
        });
        
        it("should not append the given class if the existing classes include it", function() {
            el.className = "foo";
            CssClass.add(el, "foo");
            expect(el.className).toBe("foo");
        });
    });
    
    describe("remove", function() {
        it("should remove the given class from the list of classes", function() {
           el.className = "foo bar";
           CssClass.remove(el, "foo");
           expect(el.className).toBe("bar"); 
        });
        
        it("should remove all instance of the given class from the list of classes", function() {
           el.className = "foo foo foo bar foo";
           CssClass.remove(el, "foo");
           expect(el.className).toBe("bar"); 
        });
        
        it("should remove classes with dashes, underscores and digits", function() {
           el.className = "foo-bar_2";
           CssClass.remove(el, "foo-bar_2");
           expect(el.className).toBe(""); 
        });
    });
});
