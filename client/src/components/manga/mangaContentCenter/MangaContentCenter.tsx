import * as React from 'react';

import Card from '../../common/card';

import navItems from '../../../constants/mangaPageNavigation';
import Navigation from '../../common/navigation';

class MangaContentCenter extends React.Component<{},{}> {
    public render() {
        return(
            <div className="manga__content-center">
                <Card>
                    <Navigation 
                        items={ navItems } 
                        onClick={ this.handleClick } 
                    />
                </Card>
                <Card>
                    <div className="manga__main">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore nostrum sint et, nam obcaecati architecto dolor, blanditiis ipsum voluptas soluta illum impedit temporibus perferendis? Eos rerum ipsum distinctio necessitatibus quisquam.
                        Possimus ut dolorem similique modi enim ducimus sapiente iure atque. Est aliquid suscipit quidem optio quisquam facilis, esse consectetur doloribus, rem unde quod minus dolorum ratione repudiandae repellat eum dicta?
                        Reprehenderit, labore voluptas! Commodi alias at tenetur quod eius nesciunt harum quidem earum minima explicabo? Mollitia quas quibusdam pariatur perspiciatis distinctio cumque necessitatibus, dolorum architecto! Laboriosam beatae amet fugiat nam.
                        Nam reiciendis architecto ducimus soluta, temporibus odio error repudiandae ullam illo vel? Et a, cum animi architecto error soluta, voluptate maiores dolor autem consequatur aspernatur esse laboriosam, illo nesciunt est?
                        Excepturi a esse aliquid earum voluptatem at, perspiciatis, cumque fuga tempora cum expedita recusandae incidunt unde mollitia placeat ipsam nesciunt voluptatibus nemo quae, nobis quisquam aliquam ullam quibusdam similique. Debitis!
                        Sint maxime in illo labore nisi nulla alias nam. Est laboriosam totam magnam doloribus qui, repudiandae corporis. Quia, hic assumenda. Consectetur illum, autem eligendi natus tenetur repellendus quidem asperiores laboriosam!
                        Atque a sunt cupiditate ad ratione magnam aperiam in unde eveniet, deleniti officiis earum sequi beatae rem, enim assumenda eaque dicta amet itaque accusamus! Aperiam aliquid molestiae vero voluptas reprehenderit?
                        Cumque eligendi, voluptatem nostrum voluptate officiis iusto neque vitae sapiente, sint nihil eius enim inventore itaque! Consequuntur repudiandae aspernatur voluptas architecto perferendis corrupti dignissimos hic iusto amet quaerat, ea optio?
                        Fugit repudiandae, cupiditate dolores perferendis perspiciatis natus laborum reiciendis veniam labore unde nemo, at voluptates, voluptatem in modi tempore magni. Nisi quidem ipsa suscipit veniam expedita minima, eligendi error libero.
                        Doloribus tempore ipsum, dolorum sequi totam saepe voluptatibus ex vel? Illo, perferendis veritatis placeat dolor corporis dolores vero soluta omnis cupiditate a necessitatibus maxime nam voluptas nulla ab earum ducimus?
                    </div>
                </Card>
            </div>
        );
    }

    private handleClick() {

    }
}

export default MangaContentCenter;