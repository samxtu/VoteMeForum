"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.YourName1601519460772 = void 0;
class YourName1601519460772 {
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`insert into post (text, "creatorId", title) values ('Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.', 3, 'Holy Innocents, The (Santos inocentes, Los)');
            insert into post (text, "creatorId", title) values ('Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.
            
            Fusce consequat. Nulla nisl. Nunc nisl.
            
            Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.', 3, 'Snow Creature, The');
            insert into post (text, "creatorId", title) values ('Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.', 1, 'Morituri');
            insert into post (text, "creatorId", title) values ('In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.', 3, 'Six Degrees of Separation');
            insert into post (text, "creatorId", title) values ('In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.
            
            Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.
            
            Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.', 1, 'Burlesque');
            insert into post (text, "creatorId", title) values ('Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.
            
            Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.', 1, 'Arbor, The');
            insert into post (text, "creatorId", title) values ('Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.', 3, 'Never a Dull Moment');
            insert into post (text, "creatorId", title) values ('Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.
            
            Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.', 3, 'Nobody Walks');
            insert into post (text, "creatorId", title) values ('Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.
            
            Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.', 1, 'Kid, The');
            insert into post (text, "creatorId", title) values ('Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.
            
            Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.
            
            Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.', 1, 'Ziggy Stardust and the Spiders from Mars');
            insert into post (text, "creatorId", title) values ('Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.
            
            Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.', 1, 'No Turning Back');
            insert into post (text, "creatorId", title) values ('Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.', 3, 'Return of the Living Dead, The');
            insert into post (text, "creatorId", title) values ('Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.
            
            Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.
            
            Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.', 1, 'Rosewood Lane');
            insert into post (text, "creatorId", title) values ('Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.
            
            In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.
            
            Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.', 1, 'Desert Winds');
            insert into post (text, "creatorId", title) values ('Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.
            
            Phasellus in felis. Donec semper sapien a libero. Nam dui.
            
            Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.', 3, 'Jamaica Inn');
            insert into post (text, "creatorId", title) values ('Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            
            Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.
            
            Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.', 1, 'Young Thugs: Nostalgia (Kishiwada shônen gurentai: Bôkyô)');
            insert into post (text, "creatorId", title) values ('Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.
            
            In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.
            
            Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.', 1, 'Woodmans, The');
            insert into post (text, "creatorId", title) values ('Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.', 3, 'My Life and Times With Antonin Artaud (En compagnie d''Antonin Artaud)');
            insert into post (text, "creatorId", title) values ('Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.', 1, 'Bastards (Les salauds)');
            insert into post (text, "creatorId", title) values ('Fusce consequat. Nulla nisl. Nunc nisl.
            
            Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.
            
            In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.', 1, 'Dragon Ball: The Curse Of The Blood Rubies (Doragon bôru: Shenron no densetsu)');
            insert into post (text, "creatorId", title) values ('Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.', 1, 'Marilyn in Manhattan');
            insert into post (text, "creatorId", title) values ('In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.', 1, 'Formula, The');
            insert into post (text, "creatorId", title) values ('Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.', 3, 'Incident at Loch Ness');
            insert into post (text, "creatorId", title) values ('In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.', 1, 'Prisoners');
            insert into post (text, "creatorId", title) values ('In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.
            
            Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.', 1, 'Blackfish');
            insert into post (text, "creatorId", title) values ('Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
            
            Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.
            
            Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.', 3, 'Forever Hardcore: The Documentary');
            insert into post (text, "creatorId", title) values ('Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.', 1, 'Lucas');
            insert into post (text, "creatorId", title) values ('Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.
            
            Sed ante. Vivamus tortor. Duis mattis egestas metus.
            
            Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.', 3, 'General''s Daughter, The');
            insert into post (text, "creatorId", title) values ('Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.
            
            Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.', 3, 'Les disparus de Saint-Agil');
            insert into post (text, "creatorId", title) values ('Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.
            
            In congue. Etiam justo. Etiam pretium iaculis justo.', 1, 'Where Angels Fear to Tread');
            insert into post (text, "creatorId", title) values ('Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.', 1, 'Bomb It');
            insert into post (text, "creatorId", title) values ('Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.
            
            Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', 3, 'Wild Geese II');
            insert into post (text, "creatorId", title) values ('Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.', 3, 'Act in Question, The (Acto en cuestión, El)');
            insert into post (text, "creatorId", title) values ('Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.
            
            Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.', 1, 'Particle Fever');
            insert into post (text, "creatorId", title) values ('Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.
            
            Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.', 1, 'Space Is The Place');
            insert into post (text, "creatorId", title) values ('In congue. Etiam justo. Etiam pretium iaculis justo.', 1, 'Night Visitor, The');
            insert into post (text, "creatorId", title) values ('Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.
            
            Sed ante. Vivamus tortor. Duis mattis egestas metus.', 3, 'Benigni');
            insert into post (text, "creatorId", title) values ('Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.', 1, '1984');
            insert into post (text, "creatorId", title) values ('Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.
            
            Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.
            
            Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.', 3, 'Crippled Masters (Tian can di que)');
            insert into post (text, "creatorId", title) values ('In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.
            
            Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.', 1, 'Purely Belter');
            insert into post (text, "creatorId", title) values ('In congue. Etiam justo. Etiam pretium iaculis justo.', 3, 'Hello Mary Lou: Prom Night II');
            insert into post (text, "creatorId", title) values ('Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.', 3, 'Breathless');
            insert into post (text, "creatorId", title) values ('In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.
            
            Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.', 1, 'Hard Man, The');
            insert into post (text, "creatorId", title) values ('Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.', 1, 'Hôtel du Nord');
            insert into post (text, "creatorId", title) values ('Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.
            
            Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.
            
            Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.', 1, 'Steal This Film');
            insert into post (text, "creatorId", title) values ('Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.', 3, 'Small Change (Argent de poche, L'')');
            insert into post (text, "creatorId", title) values ('Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.', 1, 'Americano');
            insert into post (text, "creatorId", title) values ('Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.', 1, 'Birds, The');
            insert into post (text, "creatorId", title) values ('Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.', 1, 'Oliver Twist');
            insert into post (text, "creatorId", title) values ('Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.', 1, 'Twister');
            insert into post (text, "creatorId", title) values ('Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.
            
            Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.', 3, 'Quo Vadis, Baby?');
            insert into post (text, "creatorId", title) values ('Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.', 3, 'Secret Adventures of Tom Thumb, The');
            insert into post (text, "creatorId", title) values ('Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.
            
            Fusce consequat. Nulla nisl. Nunc nisl.', 3, 'Lourdes');
            insert into post (text, "creatorId", title) values ('Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.
            
            Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.
            
            Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', 3, 'My Stepmother Is an Alien');
            insert into post (text, "creatorId", title) values ('Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.
            
            Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.
            
            Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.', 3, 'Prodigal Sons');
            insert into post (text, "creatorId", title) values ('Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.
            
            Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.', 1, 'Morvern Callar');
            insert into post (text, "creatorId", title) values ('Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.', 3, 'In the Shadow of Doubt (Epäilyksen varjossa)');
            insert into post (text, "creatorId", title) values ('Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.
            
            Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.', 3, 'Escape from Fort Bravo');
            insert into post (text, "creatorId", title) values ('Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.
            
            Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.', 3, 'Green Tea (Lü cha)');
            insert into post (text, "creatorId", title) values ('Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.
            
            Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.', 1, 'Unconditional Love');
            insert into post (text, "creatorId", title) values ('Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.
            
            Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.', 1, 'Carbine Williams');
            insert into post (text, "creatorId", title) values ('Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.
            
            Fusce consequat. Nulla nisl. Nunc nisl.', 3, 'Advance to the Rear');
            insert into post (text, "creatorId", title) values ('Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.
            
            Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.', 1, 'Code Conspiracy, The');
            insert into post (text, "creatorId", title) values ('In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.
            
            Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.
            
            Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.', 3, 'Paleface, The');
            insert into post (text, "creatorId", title) values ('Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.', 3, 'Stig-Helmer Story, The');
            insert into post (text, "creatorId", title) values ('Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.', 1, 'Odd Couple (Bo ming chan dao duo ming qiang) (Eternal Conflict)');
            insert into post (text, "creatorId", title) values ('Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.
            
            Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.
            
            Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.', 3, 'Gitmo');
            insert into post (text, "creatorId", title) values ('Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            
            Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.', 3, 'Banger Sisters, The');
            insert into post (text, "creatorId", title) values ('Sed ante. Vivamus tortor. Duis mattis egestas metus.', 3, 'Blast');
            insert into post (text, "creatorId", title) values ('Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.', 3, 'Barbed Wire');
            insert into post (text, "creatorId", title) values ('Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.', 3, 'Babes on Broadway');
            insert into post (text, "creatorId", title) values ('Fusce consequat. Nulla nisl. Nunc nisl.
            
            Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.
            
            In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.', 1, 'Stevie');
            insert into post (text, "creatorId", title) values ('Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.
            
            Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.
            
            Fusce consequat. Nulla nisl. Nunc nisl.', 3, 'She-Wolf of London');
            insert into post (text, "creatorId", title) values ('Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.', 3, 'Woman in the Fifth, The (Femme du Vème, La)');
            insert into post (text, "creatorId", title) values ('Phasellus in felis. Donec semper sapien a libero. Nam dui.
            
            Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.
            
            Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.', 3, 'Man with the Screaming Brain');
            insert into post (text, "creatorId", title) values ('Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.
            
            Sed ante. Vivamus tortor. Duis mattis egestas metus.
            
            Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.', 1, 'Piece of the Action, A');
            insert into post (text, "creatorId", title) values ('Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            
            Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.
            
            Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.', 3, 'Hen, his wife');
            insert into post (text, "creatorId", title) values ('In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.
            
            Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.
            
            Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.', 1, 'Wild Man Blues');
            insert into post (text, "creatorId", title) values ('Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.', 3, 'Europa Report');
            insert into post (text, "creatorId", title) values ('Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.
            
            Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.
            
            Phasellus in felis. Donec semper sapien a libero. Nam dui.', 3, 'Dylan Moran: Monster');
            insert into post (text, "creatorId", title) values ('Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.
            
            Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.', 1, 'Mitä meistä tuli');
            insert into post (text, "creatorId", title) values ('Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.
            
            Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.', 3, 'Boys Don''t Cry');
            insert into post (text, "creatorId", title) values ('In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.
            
            Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.', 1, 'Aftershock (Tangshan dadizhen)');
            insert into post (text, "creatorId", title) values ('Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.
            
            Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.
            
            In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.', 1, 'Hobson''s Choice');
            insert into post (text, "creatorId", title) values ('Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.
            
            Fusce consequat. Nulla nisl. Nunc nisl.', 1, 'Ringer, The');
            insert into post (text, "creatorId", title) values ('In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.', 3, 'Utopia');
            insert into post (text, "creatorId", title) values ('Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.', 1, 'Silver Streak');
            insert into post (text, "creatorId", title) values ('In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.
            
            Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.
            
            Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.', 3, '34 City (Er shi si cheng ji)');
            insert into post (text, "creatorId", title) values ('Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.', 3, 'Last Temptation of Christ, The');
            insert into post (text, "creatorId", title) values ('Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.
            
            Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.', 3, 'Violent Saturday');
            insert into post (text, "creatorId", title) values ('In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.
            
            Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.', 1, 'Gorilla at Large');
            insert into post (text, "creatorId", title) values ('Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.', 1, 'Bed & Board (Domicile conjugal)');
            insert into post (text, "creatorId", title) values ('Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.', 3, 'Showrunners: The Art of Running a TV Show');
            insert into post (text, "creatorId", title) values ('Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.
            
            Phasellus in felis. Donec semper sapien a libero. Nam dui.
            
            Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.', 1, 'Real Cancun, The');
            insert into post (text, "creatorId", title) values ('Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.
            
            Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.
            
            Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.', 3, 'Blood Suckers from Outer Space');
            insert into post (text, "creatorId", title) values ('Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.
            
            Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.
            
            Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.', 1, 'Land That Time Forgot, The');
            insert into post (text, "creatorId", title) values ('Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.', 1, 'Breaking Point');
            insert into post (text, "creatorId", title) values ('Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.
            
            Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.
            
            Fusce consequat. Nulla nisl. Nunc nisl.', 1, 'Any Day Now');
            insert into post (text, "creatorId", title) values ('Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.', 1, 'Visions of Light: The Art of Cinematography');
            insert into post (text, "creatorId", title) values ('Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.
            
            Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.', 1, 'Debutantes, Los');
            `);
        });
    }
    down(_) {
        return __awaiter(this, void 0, void 0, function* () { });
    }
}
exports.YourName1601519460772 = YourName1601519460772;
//# sourceMappingURL=1601519460772-YourName.js.map