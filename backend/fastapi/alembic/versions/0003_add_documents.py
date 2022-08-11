"""Add documents

Revision ID: 0003
Revises: 0002
Create Date: 2022-08-11 00:00:00

"""
from alembic import op

# revision identifiers, used by Alembic.
revision = "0003"
down_revision = "0002"
branch_labels = None
depends_on = None


UPGRADE_SQL = """
CREATE TABLE IF NOT EXISTS `document` (
    `id` int NOT NULL AUTO_INCREMENT,
    `client_id` int NOT NULL,
    `wealth_manager_id` int NOT NULL,
    `document_id` int NOT NULL,
    `docusign_url` varchar(255) DEFAULT NULL,
    `signed` bool DEFAULT FALSE,
    `created_at` datetime NOT NULL,
    `updated_at` datetime DEFAULT NULL,
    PRIMARY KEY (`id`),
    FOREIGN KEY (`client_id`) REFERENCES `client`(`id`),
    FOREIGN KEY (`wealth_manager_id`) REFERENCES `wealth_manager`(`id`)
) DEFAULT CHARSET=utf8;
"""

DOWNGRADE_SQL = """
DROP TABLE IF EXISTS `document`;
"""


def upgrade():
    op.execute(UPGRADE_SQL)


def downgrade():
    op.execute(DOWNGRADE_SQL)
