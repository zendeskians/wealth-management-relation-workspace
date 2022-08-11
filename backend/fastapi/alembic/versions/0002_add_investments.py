"""Add investments

Revision ID: 0002
Revises: 0001
Create Date: 2022-08-10 00:00:00

"""
from alembic import op

# revision identifiers, used by Alembic.
revision = "0002"
down_revision = "0001"
branch_labels = None
depends_on = None


UPGRADE_SQL = """
CREATE TABLE IF NOT EXISTS `portfolio` (
    `id` int NOT NULL AUTO_INCREMENT,
    `client_id` int NOT NULL,
    `wealth_manager_id` int,
    `month` varchar(32) NOT NULL,
    `financial_instrument` varchar(32) NOT NULL,
    `value_at_som` float NOT NULL,
    `value_at_eom` float,
    PRIMARY KEY (`id`),
    UNIQUE KEY (`client_id`, `month`, `financial_instrument`),
    FOREIGN KEY (`client_id`) REFERENCES `client`(`id`),
    FOREIGN KEY (`wealth_manager_id`) REFERENCES `wealth_manager`(`id`)
) DEFAULT CHARSET=utf8;
"""

DOWNGRADE_SQL = """
DROP TABLE IF EXISTS `portfolio`;
"""


def upgrade():
    op.execute(UPGRADE_SQL)


def downgrade():
    op.execute(DOWNGRADE_SQL)
